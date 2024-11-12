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
      {/* Background blur with solid black or white */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-[100vw] max-w-[470px] rounded-none backdrop-blur-md sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full sm:bg-transparent sm:border-0"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Navbar with exact background and text colors */}
      <nav className="flex fixed top-[1.25rem] left-1/2 h-12 -translate-x-1/2 py-2 px-4 sm:top-[1.5rem] sm:py-[1.5rem] sm:px-8 sm:bg-transparent sm:border-0 sm:shadow-none">
        <ul className="flex w-[20rem] flex-nowrap items-center justify-center gap-1 text-[0.8rem] font-medium sm:w-[initial] sm:gap-2 sm:text-lg">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-4 py-2 rounded-full transition-all duration-200",
                  {
                    // Active link styles (blue bg with white text in light mode, white bg with black text in dark mode)
                    "bg-blue-600 text-white dark:bg-white dark:text-black":
                      activeSection === link.name,
                    // Inactive link styles
                    "hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white":
                      activeSection !== link.name,
                    // Text color for active link
                    "text-white dark:text-black": activeSection === link.name,
                    // Text color for inactive links
                    "text-black dark:text-white": activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name as SectionName); // Set the active section based on the clicked link
                  setTimeOfLastClick(Date.now()); // Optionally update the timestamp
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-blue-600 rounded-full absolute inset-0 -z-10 dark:bg-black"
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
