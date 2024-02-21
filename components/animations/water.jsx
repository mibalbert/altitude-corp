/**
 * water.jsx
 */

"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const vertexShaderSource = `
                            #include <fog_pars_vertex>

                            uniform float uTime;

                            uniform float uBigWavesElevation;
                            uniform vec2 uBigWavesFrequency;
                            uniform float uBigWaveSpeed;

                            uniform  float uSmallWavesElevation;
                            uniform  float uSmallWavesFrequency;
                            uniform  float uSmallWavesSpeed;
                            uniform float uSmallWavesIterations;

                            varying float vElevation;

                            //	Classic Perlin 3D Noise 
                            //	by Stefan Gustavson
                            //
                            vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
                            vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
                            vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

                            float cnoise(vec3 P){
                              vec3 Pi0 = floor(P); // Integer part for indexing
                              vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
                              Pi0 = mod(Pi0, 289.0);
                              Pi1 = mod(Pi1, 289.0);
                              vec3 Pf0 = fract(P); // Fractional part for interpolation
                              vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
                              vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
                              vec4 iy = vec4(Pi0.yy, Pi1.yy);
                              vec4 iz0 = Pi0.zzzz;
                              vec4 iz1 = Pi1.zzzz;

                              vec4 ixy = permute(permute(ix) + iy);
                              vec4 ixy0 = permute(ixy + iz0);
                              vec4 ixy1 = permute(ixy + iz1);

                              vec4 gx0 = ixy0 / 7.0;
                              vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
                              gx0 = fract(gx0);
                              vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
                              vec4 sz0 = step(gz0, vec4(0.0));
                              gx0 -= sz0 * (step(0.0, gx0) - 0.5);
                              gy0 -= sz0 * (step(0.0, gy0) - 0.5);

                              vec4 gx1 = ixy1 / 7.0;
                              vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
                              gx1 = fract(gx1);
                              vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
                              vec4 sz1 = step(gz1, vec4(0.0));
                              gx1 -= sz1 * (step(0.0, gx1) - 0.5);
                              gy1 -= sz1 * (step(0.0, gy1) - 0.5);

                              vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
                              vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
                              vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
                              vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
                              vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
                              vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
                              vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
                              vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

                              vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
                              g000 *= norm0.x;
                              g010 *= norm0.y;
                              g100 *= norm0.z;
                              g110 *= norm0.w;
                              vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
                              g001 *= norm1.x;
                              g011 *= norm1.y;
                              g101 *= norm1.z;
                              g111 *= norm1.w;

                              float n000 = dot(g000, Pf0);
                              float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
                              float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
                              float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
                              float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
                              float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
                              float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
                              float n111 = dot(g111, Pf1);

                              vec3 fade_xyz = fade(Pf0);
                              vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
                              vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
                              float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
                              return 2.2 * n_xyz;
                            }

                            void main() {
                              #include <begin_vertex>
                              #include <project_vertex>
                              #include <fog_vertex>
                              vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                              float elevation = 
                                sin(modelPosition.x * uBigWavesFrequency.x + uTime * uBigWaveSpeed) 
                                * sin(modelPosition.z * uBigWavesFrequency.y + uTime * uBigWaveSpeed) 
                                * uBigWavesElevation;
                              
                              for(float i = 1.0; i <= 10.0; i++) {
                              
                                elevation -= abs(
                                  cnoise(
                                    vec3(modelPosition.xz * uSmallWavesFrequency * i, uTime * uSmallWavesSpeed)
                                    ) 
                                    * uSmallWavesElevation / i
                                  );
                                if(i >= uSmallWavesIterations ) {
                                  break;
                                }
                              }
                              
                              modelPosition.y += elevation;
                              vec4 viewPosition = viewMatrix * modelPosition;
                              vec4 projectedPosition = projectionMatrix * viewPosition;
                              gl_Position = projectedPosition;

                              vElevation = elevation;
}`; // Your vertex shader source

const fragmentShaderSource = `
                                  #include <fog_pars_fragment>
                                  precision mediump float;
                                  uniform vec3 uDepthColor;
                                  uniform vec3 uSurfaceColor;

                                  uniform float uColorOffset;
                                  uniform float uColorMultiplier;

                                  varying float vElevation;

                                  void main() {
                                    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
                                    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);
                                    gl_FragColor = vec4(color, 1.0);
                                    #include <fog_fragment>
                                  }
`; // Your fragment shader source

const MyWebGLComponent = () => {
  const canvasRef = useRef(null);
  // const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    /**
     * Debug
     */
    // const gui = new dat.GUI({ closed: false, width: 340 });
    // const bigWavesFolder = .addFolder("Large Waves");
    // const smallWavesFolder = gui.addFolder("Small Waves");
    // const colorFolder = gui.addFolder("Colors");

    const debugObject = {
      // waveDepthColor: isHovering ? "#60a5fa" : "#1e40af",
      // waveSurfaceColor: isHovering ? "#93c5fd" : "#60a5fa",
      // fogNear: 1,
      // fogFar: 3,
      // fogColor: isHovering ? "#e0f2fe" : "#bfdbfe",
      // waveDepthColor: "#1e40af",
      waveDepthColor: "#1d4ed8",
      // waveSurfaceColor: "#60a5fa",
      waveSurfaceColor: "#dbeafe",
      fogNear: 1,
      fogFar: 3,
      // fogColor: "#bfdbfe",
      // fogColor: "#e0f2fe",
      fogColor: "#60a5fa",
    };

    /**
     * Base
     */
    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(
      debugObject.fogColor,
      debugObject.fogNear,
      debugObject.fogFar
    );
    scene.background = new THREE.Color(debugObject.fogColor);

    /**
     * Object
     */
    const waterGeometry = new THREE.PlaneGeometry(12, 12, 512, 512);

    // Material
    const waterMaterial = new THREE.ShaderMaterial({
      vertexShader: vertexShaderSource,
      fragmentShader: fragmentShaderSource,
      transparent: true,
      fog: true,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2() },
        uBigWavesElevation: { value: 0.11 },
        uBigWavesFrequency: { value: new THREE.Vector2(4, 2) },
        uBigWaveSpeed: { value: 0.75 },
        // Small Waves
        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallWavesIterations: { value: 4 },
        // Color
        uDepthColor: { value: new THREE.Color(debugObject.waveDepthColor) },
        uSurfaceColor: { value: new THREE.Color(debugObject.waveSurfaceColor) },
        uColorOffset: { value: 0.08 },
        uColorMultiplier: { value: 5 },

        // Fog, contains fogColor, fogDensity, fogFar and fogNear
        ...THREE.UniformsLib["fog"],
      },
    });

    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI * 0.5;
    scene.add(water);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(1, 1, 1);
    scene.add(camera);
    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    // Disable vertical movement
    controls.minPolarAngle = controls.maxPolarAngle = Math.PI / 3;

    // Disable zooming
    controls.enableZoom = false;

    // Disable panning
    controls.enablePan = false;

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
 * Add 
 
 
 */
    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update controls
      // controls.update();

      // Update time
      waterMaterial.uniforms.uTime.value = elapsedTime;

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <div className="relative ">
      {/* <div className="absolute pointer-events-none  inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

      <canvas
        ref={canvasRef}
        className="webgl  w-full mx-auto h-full max-h-[700px] max-w-[1600px] rounded-xl mt-32 z-0"
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-50 flex max-h-[200px] h-full gap-5 items-end ">
        <div className="flex flex-col justify-end text-white ">
          <div className="text-8xl font-bold ">Services</div>
          <div className="text-2xl">Here to guide you to success</div>
        </div>
        <Image
          src={"/lighthouse.svg"}
          width={70}
          height={170}
          alt="lighthouse"
          className="object-contain pb-1.5 fill-white text-white"
        />
      </div>
    </div>
  );
};

export default MyWebGLComponent;
