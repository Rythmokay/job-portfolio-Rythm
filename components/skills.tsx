"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  // State to handle cursor interaction
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Optional: Mouse move effect for dynamic scaling
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className={`skill-item rounded-xl px-5 py-3 cursor-pointer transition-all duration-300 
              ${hoveredIndex === index ? 
                "scale-105 bg-blue-700 text-white" : 
                "bg-gray-200 text-black dark:bg-gray-800 dark:text-white"
              }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {skill}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .skill-item {
          background-color: #d1d5db; /* Light gray background in light mode */
          color: black; /* Default text color */
          transition: background-color 0.3s ease, transform 0.3s ease, color 0.3s ease;
          border: 1px solid transparent; /* Remove any default border */
        }

        /* Dark mode adjustments */
        .dark .skill-item {
          background-color: #2d2d2d; /* Dark background in dark mode */
          color: white; /* White text in dark mode */
        }

        /* Hover effect for interactive scaling */
        .skill-item:hover {
          background-color: #3b82f6; /* Blue background in light mode */
          color: white; /* White text */
          transform: scale(1.05); /* Slight scaling effect */
        }

        .dark .skill-item:hover {
          background-color: #2563eb; /* Darker blue background in dark mode */
          color: white; /* White text in dark mode */
        }
      `}</style>
    </section>
  );
}
