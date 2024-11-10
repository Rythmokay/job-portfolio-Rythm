"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import CategoryTabs from "./CategoryTabs"; // Import the CategoryTabs component

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5); // Ensure 50% visibility triggers the section
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  // Function to filter projects based on the selected category
  const filteredProjects = () => {
    if (selectedCategory === "All Projects") {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === selectedCategory);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      
      {/* Category Tabs section */}
      <CategoryTabs 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      
      {/* Container for Projects */}
      <div className="mt-6">
        <div className="flex flex-col items-center justify-center gap-8">  {/* Flex column layout, centered items */}
          {filteredProjects().map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
