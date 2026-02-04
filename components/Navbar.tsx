"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const scrolled = currentY > 10;

        setIsScrolled(scrolled);

        if (currentY <= 10) {
          setIsHidden(false);
        } else if (currentY > lastScrollY.current + 5) {
          setIsHidden(true);
        } else if (currentY < lastScrollY.current - 5) {
          setIsHidden(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClassName = [
    "fixed top-0 inset-x-0 z-50 border-b",
    isScrolled
      ? "bg-white/90 backdrop-blur-sm border-gray-200/80"
      : "bg-white border-gray-200",
    isHidden ? "-translate-y-full" : "translate-y-0",
    "transition-[transform,background-color,backdrop-filter] duration-200 ease-out motion-reduce:transition-none",
  ].join(" ");

  const containerClassName = [
    "max-w-6xl mx-auto px-6 flex items-center justify-between",
    isScrolled ? "h-10" : "h-12",
    "transition-[height] duration-200 ease-out motion-reduce:transition-none",
  ].join(" ");

  return (
    <nav className={navClassName} aria-label="Primary">
      <div className={containerClassName}>
        <div className="text-sm font-medium text-gray-700">
          <Link href="/" className="transition-opacity hover:opacity-70">
            Home
          </Link>
          <span>, </span>
          <Link href="/#about" className="transition-opacity hover:opacity-70">
            About
          <span>, </span>
          </Link>
          <Link href="/projects" className="transition-opacity hover:opacity-70">
            Projects
          </Link>
          <span>, </span>
          <Link href="/#skills" className="transition-opacity hover:opacity-70">
            Skills
          </Link>
        </div>
        <a
          href="mailto:the.vinicius.creative@gmail.com"
          className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 underline-offset-4 decoration-1 decoration-gray-900/60 transition-colors hover:decoration-gray-900"
        >
          Start a project <ArrowRightIcon size={16} weight="bold" />
        </a>
      </div>
    </nav>
  );
}
