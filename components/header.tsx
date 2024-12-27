"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data"; // Ensure links contain the correct hash values
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

type SectionName = "Home" | "About" | "Skills" | "Projects" | "Contact";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Background blur with wider navbar */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-[90vw] max-w-[500px] rounded-none bg-white/80 backdrop-blur-md dark:bg-black/80 sm:top-6 sm:h-[3.25rem] sm:w-[50rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Navbar */}
      <nav className="flex fixed top-[1.25rem] left-1/2 h-12 -translate-x-1/2 py-2 px-4 sm:top-[1.5rem] sm:py-3 sm:px-8">
        <ul className="flex items-center justify-center gap-1 sm:gap-4 w-full">
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
                    // Active link styles (blue bg with white text in light mode, white bg with black text in dark mode)
                    "bg-blue-700 text-white dark:bg-blue-700 dark:text-white":
                      activeSection === link.name,
                    // Inactive link styles
                    "hover:bg-gray-200 hover:text-black dark:hover:bg-gray-200 dark:hover:text-black":
                      activeSection !== link.name,
                    // Text color for active link
                    "text-white dark:text-black": activeSection === link.name,
                    // Text color for inactive links
                    "text-black dark:text-white": activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name as SectionName);
                  setTimeOfLastClick(Date.now());
                }}
                aria-current={activeSection === link.name ? "page" : undefined}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-blue-700 rounded-full absolute inset-0 -z-10 dark:bg-blue-600"
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
