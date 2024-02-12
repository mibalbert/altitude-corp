/**
 * landing-page/Hero.jsx
 */

"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import GSAP from "./gsap";
import Lenis from "@studio-freight/lenis";

const Hero = () => {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    // <main className={styles.main}>
    <main>
      <GSAP />
    </main>
  );
};

export default Hero;
