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
    <h2 style="width: min-content;  font-size: 20px; font-weight: bold; line-height: 1;  text-align: center; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px; background-color: #2563eb; color: white;">${title}</h2>
    
  </div>
  `;
  const gData = [
    { title: "London", lat: 51.5074, lng: -0.1278, size: 30, color: "#FF6347" },
    { title: "Tokyo", lat: 35.6895, lng: 139.6917, size: 32, color: "#FFD700" },
    { title: "Paris", lat: 48.8566, lng: 2.3522, size: 28, color: "#4682B4" },
    { title: "Berlin", lat: 52.5200, lng: 13.4050, size: 27, color: "#FFA07A" },
    { title: "Rome", lat: 41.9028, lng: 12.4964, size: 29, color: "#800000" },
    { title: "Moscow", lat: 55.7558, lng: 37.6176, size: 31, color: "#FF69B4" },
    { title: "Beijing", lat: 39.9042, lng: 116.4074, size: 28, color: "#FF6347" },
    { title: "Sydney", lat: -33.8688, lng: 151.2093, size: 30, color: "#1E90FF" },
    { title: "Dubai", lat: 25.276987, lng: 55.296249, size: 26, color: "#FFD700" },
    { title: "New Delhi", lat: 28.6139, lng: 77.209, size: 29, color: "#FF6347" },
    // North America
    { title: "New York", lat: 40.7128, lng: -74.006, size: 30, color: "#1E90FF" },
    { title: "Los Angeles", lat: 34.0522, lng: -118.2437, size: 28, color: "#FF6347" },
    { title: "Toronto", lat: 43.65107, lng: -79.347015, size: 29, color: "#FFA500" },
    { title: "Mexico City", lat: 19.4326, lng: -99.1332, size: 31, color: "#FF69B4" },

    // South America
    { title: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, size: 28, color: "#FFD700" },
    { title: "Buenos Aires", lat: -34.6037, lng: -58.3816, size: 27, color: "#4682B4" },
    { title: "Lima", lat: -12.0464, lng: -77.0428, size: 29, color: "#800000" },
    { title: "São Paulo", lat: -23.5505, lng: -46.6333, size: 32, color: "#FF6347" }
  ];


  const globeElement = useRef();

  const globeMaterial = new THREE.MeshPhongMaterial();

  useEffect(() => {
    globeElement.current.controls().autoRotate = true;
    globeElement.current.controls().autoRotateSpeed = 2;
    globeElement.current.controls().enableZoom = false;
  }, []);

  return (
    <section className="h-[70vh] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full flex items-end">
        <div className="text-[350px] font-bold text-blue-200">
          ALTITUDE
        </div>
      </div>
      <div className="">
        <Globe
          waitForGlobeReady={false}
          animateIn={false}
          globeMaterial={globeMaterial}
          ref={globeElement}
          enablePointerInteraction={false}
          pointOfView={[12, 12, 2]}
          hexPolygonsData={geoJson.features}
          hexPolygonColor={"#2563eb"}
          backgroundColor={"hsla(0, 0%, 100%, 0)"}
          htmlElementsData={gData}
          htmlElement={(d) => {
            const el = document.createElement("div");
            el.innerHTML = markerSvg(d.title);
            el.style.color = d.color;
            el.style.width = `${d.size}px`;
            el.style["pointer-events"] = "none";
            el.onclick = () => console.info(d);
            return el;
          }}
        />
      </div>
    </section>
  );
};

export default WorldWide;
