"use client";import React, { useEffect, useState } from "react";

function Particle({ svg, coordinates, friction }) {
  const [position, setPosition] = useState(coordinates.y);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [rotation, setRotation] = useState(Math.random() > 0.5 ? "-" : "+");
  const [scale, setScale] = useState(0.5 + Math.random());
  const [siner] = useState(200 * Math.random());
  const [item, setItem] = useState(null);

  useEffect(() => {
    const newItem = document.createElement("div");
    newItem.innerHTML = svg;
    newItem.style.position = "absolute";
    newItem.style.transform = `translateX(${coordinates.x}px) translateY(${coordinates.y}px)`;
    document.body.appendChild(newItem);
    setDimensions({
      width: newItem.offsetWidth,
      height: newItem.offsetHeight,
    });
    setItem(newItem);

    return () => {
      if (item) {
        item.remove();
      }
    };
  }, [svg, coordinates, item]);

  function moveParticle() {
    setPosition((prevPosition) => prevPosition - friction);
    if (item) {
      const top = position;
      const left =
        coordinates.x +
        Math.sin((position * Math.PI) / (window.innerHeight / 2)) * siner;
      item.style.transform = `translateX(${left}px) translateY(${top}px) scale(${scale}) rotate(${rotation}${
        position + dimensions.height
      }deg)`;
    }
    if (position < -dimensions.height && item) {
      item.remove();
      return false;
    } else {
      return true;
    }
  }

  return moveParticle;
}

export default Particle;
