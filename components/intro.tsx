"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaLaptopCode, FaChartLine, FaBrain, FaPen } from "react-icons/fa"; // Added tech icons
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // State to handle modal visibility and selected domain for CV
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  // Handle modal close and CV download
  const handleDownloadClick = (domain: string) => {
    setSelectedDomain(domain);
    setIsModalOpen(false);

    // Mapping domain to the file path in the public/cv folder
    const cvFiles: { [key: string]: string } = {
      Web_Development: "/cv/Web_Development_CV.pdf",
      Data_Science: "/cv/Data_Science_CV.pdf",
      Machine_Learning: "/cv/Machine_Learning_CV.pdf",
      Non_Tech: "/cv/Non_Tech_CV.pdf",
    };

    // Get the file path for the selected domain
    const filePath = cvFiles[domain];

    if (filePath) {
      // Trigger the file download by setting the location.href to the file path
      window.location.href = filePath;
    }
  };

  return (
    <section
      ref={ref}
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
          className="group bg-blue-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-700 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* Download CV Button */}
        <button
          className="group bg-black text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          onClick={() => setIsModalOpen(true)} // Open the modal on click
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </button>

        {/* LinkedIn Button */}
        <a
          className="group bg-blue-600 text-white p-4 hover:text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-white dark:border-black"
          href="https://www.linkedin.com/in/rythm-jagga-393791309/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        {/* GitHub Button */}
        <a
          className="group bg-black text-white p-4 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-white active:scale-105 transition cursor-pointer border-white dark:border-black"
          href="https://github.com/Rythmokay/"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>

      {/* Modal for CV selection */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
          <motion.div
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-8 rounded-lg shadow-lg max-w-[400px] w-full relative"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
          >
            {/* Close Modal Button */}
            <button
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)} // Close modal
            >
              <IoMdClose />
            </button>

            <h2 className="text-xl font-semibold text-center mb-6">Select Domain</h2>
            <div className="space-y-4">
              {/* Web Development CV */}
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition flex items-center gap-2 justify-center"
                onClick={() => handleDownloadClick("Web_Development")}
              >
                <FaLaptopCode className="text-lg" /> Web Development CV
              </button>

              {/* Data Science CV */}
              <button
                className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition flex items-center gap-2 justify-center"
                onClick={() => handleDownloadClick("Data_Science")}
              >
                <FaChartLine className="text-lg" /> Data Science CV
              </button>

              {/* Machine Learning CV */}
              <button
                className="w-full bg-yellow-500 text-white py-2 rounded-full hover:bg-yellow-600 transition flex items-center gap-2 justify-center"
                onClick={() => handleDownloadClick("Machine_Learning")}
              >
                <FaBrain className="text-lg" /> Machine Learning CV
              </button>

              {/* Non-Tech Job Roles CV */}
              <button
                className="w-full bg-gray-500 text-white py-2 rounded-full hover:bg-gray-600 transition flex items-center gap-2 justify-center"
                onClick={() => handleDownloadClick("Non_Tech")}
              >
                <FaPen className="text-lg" /> Non-Tech Job Roles CV
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
