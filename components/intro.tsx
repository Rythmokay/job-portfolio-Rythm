"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // State to handle dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle Web Development CV download
  const handleDownloadClick = () => {
    // Directly download the specific Web Development CV file
    const filePath = "/cv/Web_Development_CV.pdf"; // Path updated to web development CV

    // Trigger the file download
    window.location.href = filePath;
  };

  // Check for dark mode on mount
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDark);

    // Listen for changes to the color scheme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      setIsDarkMode(e.matches);
    });

    return () => {
      mediaQuery.removeEventListener("change", () => {});
    };
  }, []);

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/linkdin profilepic.jpeg"
              alt="Rythm Jagga"
              width={199}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-semibold">Hello, I'm Rythm</span> I'm a{" "}
        <span className="font-bold">fullstack developer, Freelancer </span>{" "}
        <span className="font-bold">
          with Skills in Machine Learning & Data Science{" "}
        </span>{" "}
        <span className="underline"></span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Contact Button */}
        <Link
          href="#contact"
          className="group bg-blue-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* Download Web Development CV Button with dynamic styling based on dark mode */}
        <button
          className={`group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition ${
            isDarkMode
              ? "bg-gray-200 text-black hover:bg-gray-200 "
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={handleDownloadClick} // Directly download the web development CV
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </button>

        {/* LinkedIn Button */}
        <a
          className="group bg-blue-700 text-white p-4 hover:text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-2 border-white dark:border-black"
          href="https://www.linkedin.com/in/rythm-jagga-393791309/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        {/* GitHub Button with dynamic styling based on dark mode */}
        <a
          className={`group p-4 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-1 ${
            isDarkMode
              ?"bg-gray-200 text-black hover:bg-gray-200 "
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          href="https://github.com/Rythmokay/"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
