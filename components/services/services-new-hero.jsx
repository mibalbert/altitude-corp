/**
 * services-new-hero.jsx
 */

"use client";
import React from "react";
import Particle from "./particle";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const data = [
  '<svg viewBox="0 0 12 12"> <path class="point" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>',
  '<svg viewBox="0 0 13 14"><path class="rhombus" d="M5.9,1.2L0.7,6.5C0.5,6.7,0.5,7,0.7,7.2l5.2,5.4c0.2,0.2,0.5,0.2,0.7,0l5.2-5.4 C12,7,12,6.7,11.8,6.5L6.6,1.2C6.4,0.9,6.1,0.9,5.9,1.2L5.9,1.2z M3.4,6.5L6,3.9c0.2-0.2,0.5-0.2,0.7,0l2.6,2.6 c0.2,0.2,0.2,0.5,0,0.7L6.6,9.9c-0.2,0.2-0.5,0.2-0.7,0L3.4,7.3C3.2,7.1,3.2,6.8,3.4,6.5L3.4,6.5z" /></svg>',
  '<svg viewBox="0 0 561.8 559.4"><path class="pentahedron" d="M383.4,559.4h-204l-2.6-0.2c-51.3-4.4-94-37-108.8-83l-0.2-0.6L6,276.7l-0.2-0.5c-14.5-50,3.1-102.7,43.7-131.4 L212.1,23C252.4-7.9,310.7-7.9,351,23l163.5,122.5l0.4,0.3c39,30.3,56,82.6,42.2,130.3l-0.3,1.1l-61.5,198 C480.4,525.6,435.5,559.4,383.4,559.4z M185.5,439.4h195.2l61.1-196.8c0-0.5-0.3-1.6-0.7-2.1L281.5,120.9L120.9,241.2 c0,0.3,0.1,0.7,0.2,1.2l60.8,195.8C182.5,438.5,183.7,439.1,185.5,439.4z M441,240.3L441,240.3L441,240.3z"/></svg>',
  '<svg x="0px" y="0px" viewBox="0 0 13 12"> <path class="circle" d="M6.5,0.1C3.4,0.1,0.8,2.8,0.8,6s2.6,5.9,5.7,5.9s5.7-2.7,5.7-5.9S9.7,0.1,6.5,0.1L6.5,0.1z M6.5,8.8 C5,8.8,3.8,7.6,3.8,6S5,3.2,6.5,3.2S9.2,4.4,9.2,6s-1.2,2.8-2.7,2.8L6.5,8.8z"/> </svg>',
  '<svg viewBox="0 0 12 12"> <path class="x" d="M10.3,4.3H7.7V1.7C7.7,0.8,7,0,6,0S4.3,0.8,4.3,1.7v2.5H1.7C0.8,4.3,0,5,0,6s0.8,1.7,1.7,1.7h2.5v2.5 C4.3,11.2,5,12,6,12s1.7-0.8,1.7-1.7V7.7h2.5C11.2,7.7,12,7,12,6S11.2,4.3,10.3,4.3z"/></svg>',
];

const ServicesNewHero = () => {
  let isPaused = false;
  window.onblur = () => {
    isPaused = true;
  };
  window.onfocus = () => {
    isPaused = false;
  };

  const particles = [];

  setInterval(() => {
    if (!isPaused) {
      particles.push(
        <Particle
          key={particles.length}
          svg={data[randomInt(0, data.length - 1)]}
          coordinates={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
          }}
          friction={1 + Math.random() * 3}
        />
      );
    }
  }, 200);
  function update() {
    for (let i = particles.length - 1; i >= 0; i--) {
      if (!particles[i]()) {
        // Call moveParticle function directly
        particles.splice(i, 1);
      }
    }
    requestAnimationFrame(update);
  }
  update();

  return (
    <div className="hero-section">
      {/* Your hero content */}
      <h1>Welcome to My Website</h1>
      <p>This is the hero section of my website.</p>

      {/* Container for particles */}
      <div className="particles-container">
        {/* Render particles */}
        {particles}
      </div>
    </div>
  );
};

export default ServicesNewHero;
