"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PageAnimations() {
  useGSAP(() => {
    // Hero — fade up on load
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" },
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "expo.out" },
    );

    // About — slide up on scroll
    gsap.fromTo(
      ".about-content",
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    // Skills — staggered cards
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 82%",
          toggleActions: "play none none none",
        },
      },
    );

    // Projects — scale up
    gsap.fromTo(
      ".project-card",
      { opacity: 0, scale: 0.96, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 82%",
          toggleActions: "play none none none",
        },
      },
    );

    // Experience header
    gsap.fromTo(
      ".experience-header",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".experience-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    // Experience entries — staggered
    gsap.fromTo(
      ".experience-entry",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".experience-entry",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  });

  return null;
}
