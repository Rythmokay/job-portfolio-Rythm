"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
<p className="mb-3">
  I’m a full-stack web developer and freelancer currently pursuing a B.Tech in{" "}
  <span className="font-medium">AI and Data Science</span>. My journey into tech began with a passion for programming, leading me to explore various areas, particularly{" "}
  <span className="font-medium">data analysis, data science, and machine learning</span>. I find great joy in problem-solving and have worked on multiple projects in these domains. While I'm new to freelancing, I’m eager to bring my skills to life and collaborate with clients. I’m always on the lookout for opportunities to learn and grow in the tech field.
</p>


      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Machine learning</span>
      </p>
    </motion.section>
  );
}
