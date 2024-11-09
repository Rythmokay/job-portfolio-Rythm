"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Define liveStatus as an optional boolean in ProjectProps
type ProjectProps = (typeof projectsData)[number] & {
  liveStatus?: boolean; // Optional boolean property for live status
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveStatus = false, // Default to false if liveStatus is not provided
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track the scroll position for smooth scrolling effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0.6"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 last:mb-0 overflow-hidden" // Added overflow-hidden to prevent horizontal scroll
    >
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="block">
        <section className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          
          {/* Live Status Badge with Blinking and Glowing Effect */}
          <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
            <span
              className={`${
                liveStatus
                  ? "bg-green-500 text-white animate-pulse text-shadow-glow"
                  : "bg-red-500 text-white animate-pulse text-shadow-glow"
              } font-semibold text-sm px-2 py-1 rounded-full`}
            >
              {liveStatus ? "Live" : "Not Live"}
            </span>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 p-4 sm:p-6">
            {/* Image */}
            <div className="sm:w-1/2 relative mb-4 sm:mb-0">
              <Image
                src={imageUrl}
                alt={title}
                quality={95}
                layout="intrinsic" // Keeps the image ratio
                width={700}
                height={500}
                className="rounded-lg object-cover w-full h-full transform transition-all hover:scale-105 hover:translate-x-2 hover:translate-y-2"
              />
            </div>

            {/* Text Content */}
            <div className="sm:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-700 dark:text-white/70 leading-relaxed">{description}</p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-6">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.75rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </a>
    </motion.div>
  );
}
