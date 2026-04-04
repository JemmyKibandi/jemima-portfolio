"use client";

import Image from "next/image";
import { forwardRef } from "react";

const AboutSection = forwardRef<HTMLElement>(function AboutSection(_, ref) {
  return (
    <section ref={ref} id="about" className="px-6 py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <div className="about-content flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900 font-extralight">
            From intuitive interfaces to enterprise backends —{" "}
            <span className="font-serif italic">I build full-stack solutions</span>{" "}
            that are secure, scalable, and built to last.
          </h2>
          <p className="mt-8 text-sm font-semibold text-gray-500">
            Full-Stack Software Engineer
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
            I work across React frontends, Node.js backends, and cloud
            infrastructure to deliver products that are user-friendly and
            enterprise-ready. My background spans fintech and enterprise
            software, where reliability and security come first.
          </p>
        </div>
        <div className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] rounded-2xl overflow-hidden">
          <Image
            src="/about.jpg"
            alt="Editorial portrait of a creative studio"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
});

export default AboutSection;

