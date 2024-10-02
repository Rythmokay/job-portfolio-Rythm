"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data"; // Ensure links contain the correct hash values
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

type SectionName = "Home" | "About" | "Skills" | "Projects" | "Contact";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    const handleScroll: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("id") as SectionName; // Assert section name
          if (sectionName) {
            console.log(`Active section: ${sectionName}`); // Debug log
            setActiveSection(sectionName);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    });

    // Observe each section based on the links
    links.forEach((link) => {
      const sectionElement = document.querySelector(link.hash) as HTMLElement;
      if (sectionElement) {
        console.log(`Observing section: ${link.name}`); // Debug log
        observer.observe(sectionElement);
      } else {
        console.warn(`Section element not found for: ${link.hash}`); // Warn if section not found
      }
    });

    return () => {
      observer.disconnect(); // Cleanup
    };
  }, [setActiveSection]);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-[100vw] max-w-[470px] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[1rem] left-1/2 h-12 -translate-x-1/2 py-1 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[20rem] flex-nowrap items-center justify-center gap-1 text-[0.75rem] font-medium text-gray-500 sm:w-[initial] sm:gap-2">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-3 py-2 rounded-full transition-all duration-200",
                  {
                    "bg-gradient-to-r from-blue-500 to-purple-500 text-white":
                      activeSection === link.name,
                    "hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white":
                      activeSection !== link.name,
                    "text-gray-950 dark:text-white": activeSection === link.name,
                    "text-gray-700 dark:text-gray-300": activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name as SectionName); // Use type assertion
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
