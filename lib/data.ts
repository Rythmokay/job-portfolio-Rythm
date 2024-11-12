import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaReact } from 'react-icons/fa';
import Grammarandspell from '@/public/Projectimages/grammar&spellcheck.png'
export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

export const projectsData = [
  {
    title: "Grammar and Spell Checker",
    description: "Developed an NLP-based web application that checks grammar and spelling errors in assignments and sentences. Built using a tech stack including HTML, CSS, JavaScript, Python, Flask, and Natural Language Processing (NLP). The tool provides real-time corrections and suggestions, enhancing writing accuracy for users.",
    tags: ["Html", "Css","javascript","Python","Flask","NLP"],
    imageUrl: Grammarandspell,
    category: "Machine Learning",
    githubUrl: "https://grammarandspellchecker.vercel.app/",
    liveStatus: true,
  },
  
  // New projects
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills, built with React and Tailwind CSS.",
    tags: ["React", "Tailwind", "JavaScript"],
    imageUrl: "", // Placeholder
    category: "Frontend",
    githubUrl: "https://github.com/user/portfolio-website"
  },
  {
    title: "Weather App",
    description: "A dynamic weather application that fetches real-time data from a weather API.",
    tags: ["React", "CSS", "API"],
    imageUrl: "", // Placeholder
    category: "Frontend",
    githubUrl: "https://github.com/user/weather-app"
  },
  {
    title: "E-commerce Product Page",
    description: "An interactive product page for an e-commerce site, featuring product reviews and ratings.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "", // Placeholder
    category: "Frontend",
    githubUrl: "https://github.com/user/ecommerce-product-page"
  },
  {
    title: "Blog Template",
    description: "A responsive blog template built with HTML and CSS, showcasing articles and images.",
    tags: ["HTML", "CSS"],
    imageUrl: "", // Placeholder
    category: "Frontend",
    githubUrl: "https://github.com/user/blog-template"
  },
  {
    title: "Task Manager",
    description: "A simple task management app that allows users to add, delete, and mark tasks as complete.",
    tags: ["React", "CSS", "JavaScript"],
    imageUrl: "", // Placeholder
    category: "Frontend",
    githubUrl: "https://github.com/user/task-manager"
  },
  
  // Full Stack Web Development
  {
    title: "Full Stack E-Commerce",
    description: "An e-commerce application that allows users to browse products and make purchases.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: "", // Placeholder
    category: "Full Stack",
    githubUrl: "https://github.com/user/full-stack-ecommerce"
  },
  
  {
    title: "Text Sentiment Analysis",
    description: "Created a sentiment analysis tool to classify text as positive, negative, or neutral.",
    tags: ["Python", "NLTK", "Pandas"],
    imageUrl: "",
    category: "Data Science",
    githubUrl: "https://github.com/user/text-sentiment-analysis"
  },

  // Machine Learning
  
  {
    title: "Recommendation System",
    description: "Built a recommendation system using collaborative filtering techniques for movie suggestions.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    imageUrl: "",
    category: "Machine Learning",
    githubUrl: "https://github.com/user/recommendation-system"
  },
] as const;

export const skillsData = [
  // Frontend Development
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind",
  "React",
  "Next.js",
  "TypeScript",

  // Backend Development
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Redux",

  // Programming Languages
  "Python",
  "SQL",
  "C",
  "C++",
  "Java",
  "Dsa",

  // Data Engineering & Big Data
  "Apache Spark",
  "Hadoop",
  "Docker",
  "AWS",
  "Azure",

  // Data Science & Machine Learning
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "Seaborn",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "Jupyter Notebooks",
  "NLTK",  // Natural Language Processing (NLP)
  "SpaCy",  // NLP
  "OpenCV",  // Computer Vision
  "SciPy",
  
  // Data Visualization
  "Power BI",
  "Tableau",
  "Excel",
  
  // Version Control & Deployment
  "Git",
  "Docker",
  "AWS",
  "Azure",
  "Heroku"
] as const;



export const project_nav = [
  { name: "All Projects", hash: "#All" },
  { name: "Frontend", hash: "#FWeb" }, // Removed extra space
  { name: "Full Stack", hash: "#BWeb" }, // Removed extra space
  { name: "Machine Learning", hash: "#ML" },
  { name: "Data Science", hash: "#DS" },
];
