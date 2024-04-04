/**
 * world-wide.jsx
 */

"use client";
import Globe from "react-globe.gl";

import * as THREE from "three";
import geoJson from "./countries.json";
import { useEffect, useRef } from "react";

const WorldWide = () => {
  const markerSvg = (title) => `
  <div>
    <h2 style="width: min-content;  font-size: 20px; font-weight: bold;  text-align: center; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px; background-color: #2563eb; color: white;">${title}</h2>
    
  </div>
  `;

  const gData = [
    {
      title: "Masachusette",
      lat: 42,
      lng: -71,
      size: 32,
      color: "#172554",
    },
  ];

  const globeElement = useRef();

  const globeMaterial = new THREE.MeshPhongMaterial();
  useEffect(() => {
    globeElement.current.controls().autoRotate = true;
    const op = globeElement.current.controls();
    console.log(op);
    globeElement.current.controls().autoRotateSpeed = 2;
    globeElement.current.controls().enableZoom = false;
  }, []);

  return (
    <section className="h-[70vh] overflow-hidden">
      <div className="">
        <Globe
          waitForGlobeReady={false}
          animateIn={false}
          globeMaterial={globeMaterial}
          ref={globeElement}
          enablePointerInteraction={false}
          hexPolygonsData={geoJson.features}
          hexPolygonColor={"#2563eb"}
          // hexPolygonColor={(geometry) => {
          //   return ["#0000ff", "#0000cc", "#000099", "#000066"][
          //     geometry.properties.abbrev_len % 4
          //   ];
          // }}
          backgroundColor={"#ffffff"}
          // showGlobe={false}
          // pointsData={myData}22
          // pointAltitude="altitude"
          // pointColor="color"
          htmlElementsData={gData}
          htmlElement={(d) => {
            const el = document.createElement("div");
            // Create and set the title
            // const title = document.createElement("div");

            // title.innerHTML = d.title; // Set the title text here
            // title.style.fontSize = "12px"; // Adjust title font size or other styles as needed
            // el.appendChild(title);

            el.innerHTML = markerSvg(d.title);
            el.style.color = d.color;
            el.style.width = `${d.size}px`;

            el.style["pointer-events"] = "none";
            // el.style.cursor = "pointer";
            el.onclick = () => console.info(d);
            return el;
          }}
        />
      </div>
    </section>
  );
};

export default WorldWide;

// /**
//  *
//  */

// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import EditableComp from "../editableComp";

// import createGlobe from "cobe";

// const WorldWide = ({ data }) => {
//   const landingFooterTitle = data?.find(
//     (el) => el.compName === "landing-footer-title"
//   );
//   const landingFooterText = data?.find(
//     (el) => el.compName === "landing-footer-text"
//   );
//   const canvasRef = useRef();

//   useEffect(() => {
//     let phi = 0;

//     const globe = createGlobe(canvasRef.current, {
//       devicePixelRatio: 2,
//       width: 600 * 2,
//       height: 600 * 2,
//       phi: 0,
//       theta: 0,
//       dark: 1,
//       diffuse: 1.2,
//       mapSamples: 1600,
//       mapBrightness: 6,
//       baseColor: [0.3, 0.3, 0.3],
//       markerColor: [0.1, 0.8, 1],
//       glowColor: [1, 1, 1],
//       markers: [
//         // longitude latitude
//         { location: [44.435065, 26.101843], size: 0.05 },
//         { location: [51.50105, -0.12435], size: 0.05 },
//         { location: [52.517292, 13.408403], size: 0.05 },
//         { location: [40.412565, -3.691862], size: 0.05 },
//         { location: [40.705265, -74.01137], size: 0.05 },
//         { location: [37.767969, -122.423196], size: 0.05 },
//         { location: [34.059011, -118.249152], size: 0.05 },
//         { location: [22.305311, 114.173464], size: 0.05 },
//         { location: [1.303757, 103.834351], size: 0.05 },
//       ],
//       onRender: (state) => {
//         // Called on every animation frame.
//         // `state` will be an empty object, return updated params.
//         state.phi = phi;
//         phi += 0.001;
//       },
//     });

//     return () => {
//       globe.destroy();
//     };
//   });

//   return (
//     <section className="w-full    ">
//       <div className="relative py-32 w-full max-w-7xl mx-auto   overflow-hidden px-8 md:px-10">
//         <Image
//           width={500}
//           height={500}
//           alt=""
//           className="absolute left-1/2 top-0 transform -translate-x-1/2"
//           src="/vault-assets/images/footers/gradient3.svg"
//         />
//         <div className="relative z-10 container px-4 mx-auto">
//           <div className="flex flex-wrap -m-8">
//             <div className="w-full sm:w-1/2 xl:w-1/3">
//               <div className="lg:max-w-sm">
//                 <EditableComp isEditable={false} comp={landingFooterTitle} />
//                 <div className="md:inline-block">
//                   <button
//                     className="py-4 px-6 w-full text-blue-600 font-semibold rounded-xl shadow-4xl focus:ring focus:ring-blue-300 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
//                     type="button"
//                   >
//                     Get A Free Quote
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full sm:w-1/2 xl:w-2/3">
//               <canvas
//                 ref={canvasRef}
//                 style={{
//                   width: 600,
//                   height: 600,
//                   maxWidth: "100%",
//                   aspectRatio: 1,
//                 }}
//               />

//               {/* <div className="flex flex-wrap -m-8 mb-10">
//                 <div className="w-full sm:w-1/3 p-8">
//                   <ul>
//                     <li className="mb-3.5">
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         Germany
//                       </h3>
//                     </li>
//                     <li className="mb-3.5">
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         United Kingdom
//                       </h3>
//                     </li>
//                     <li className="mb-3.5">
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         Spain
//                       </h3>
//                     </li>
//                     <li>
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         United States
//                       </h3>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="w-full sm:w-1/3 p-8">
//                   <ul>
//                     <li className="mb-3.5">
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         Italy
//                       </h3>
//                     </li>
//                     <li className="mb-3.5">
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         Morocco
//                       </h3>
//                     </li>
//                     <li>
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         Malaga
//                       </h3>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="w-full sm:w-1/3 p-8">
//                   <ul>
//                     <li className="mb-3.5">
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         Indonesia
//                       </h3>
//                     </li>
//                     <li className="mb-3.5">
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         {" "}
//                         Japan
//                       </h3>
//                     </li>
//                     <li>
//                       <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
//                         Canada
//                       </h3>
//                     </li>
//                   </ul>
//                 </div>
//               </div> */}
//               <EditableComp isEditable={false} comp={landingFooterText} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorldWide;
