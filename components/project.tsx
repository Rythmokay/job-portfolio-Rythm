import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
      className="group mb-8 last:mb-0 overflow-hidden"
    >
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="block">
        <section className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:text-white relative mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-[750px] h-auto sm:h-auto">

          {/* Live Status Badge */}
          <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
            <span
              className={`${
                liveStatus
                  ? "bg-green-500 text-white border-2 border-green-600 animate-pulse"
                  : "bg-red-500 text-white border-2 border-red-600 animate-pulse"
              } font-semibold text-xs px-3 py-1 rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl`}
            >
              {liveStatus ? "Live" : "Not hosted yet"}
            </span>
          </div>

          {/* Content Layout */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Image Container */}
            <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden rounded-lg">
              <div className="relative w-full h-full">
                <Image
                  src={imageUrl}
                  alt={title}
                  quality={95}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image covers the container without distortion
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-between w-full">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
              <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">{description}</p>

              {/* Tags */}
              <ul className="flex flex-wrap mt-4 gap-2">
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
