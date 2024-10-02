import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaReact } from 'react-icons/fa';

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    category: "Full Stack",
    githubUrl: "https://github.com/user/corpcomment"
  },
  {
    title: "rmtDev",
    description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    category: "Frontend",
    githubUrl: "https://github.com/user/rmtdev"
  },
  {
    title: "Word Analytics",
    description: "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    category: "Data Science",
    githubUrl: "https://github.com/user/wordanalytics"
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
    title: "Social Media Dashboard",
    description: "A dashboard for users to manage social media posts and view analytics.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: "", // Placeholder
    category: "Full Stack",
    githubUrl: "https://github.com/user/social-media-dashboard"
  },
  
  // Data Science
  {
    title: "Customer Segmentation Analysis",
    description: "Analyzed customer data to segment users based on purchasing behavior using clustering techniques.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    imageUrl: "",
    category: "Data Science",
    githubUrl: "https://github.com/user/customer-segmentation-analysis"
  },
  {
    title: "Sales Forecasting",
    description: "Built a model to predict future sales using historical data and regression techniques.",
    tags: ["Python", "Scikit-learn", "NumPy"],
    imageUrl: "",
    category: "Data Science",
    githubUrl: "https://github.com/user/sales-forecasting"
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
    title: "Image Classifier",
    description: "Developed an image classification model using convolutional neural networks (CNN).",
    tags: ["Python", "TensorFlow", "Keras"],
    imageUrl: "",
    category: "Machine Learning",
    githubUrl: "https://github.com/user/image-classifier"
  },
  {
    title: "Recommendation System",
    description: "Built a recommendation system using collaborative filtering techniques for movie suggestions.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    imageUrl: "",
    category: "Machine Learning",
    githubUrl: "https://github.com/user/recommendation-system"
  },
  {
    title: "Stock Price Prediction",
    description: "Developed a predictive model for stock prices using historical data and LSTM networks.",
    tags: ["Python", "TensorFlow", "NumPy"],
    imageUrl: "",
    category: "Machine Learning",
    githubUrl: "https://github.com/user/stock-price-prediction"
  },
  {
    title: "Fraud Detection System",
    description: "Created a machine learning model to identify fraudulent transactions using anomaly detection.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    imageUrl: "",
    category: "Machine Learning",
    githubUrl: "https://github.com/user/fraud-detection-system"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Redux",
  "Python (with Libraries)",
  "SQL",
  "Apache Spark",
  "Hadoop",
  "Power BI",
  "Tableau",
  "Excel",
  "Docker",
  "AWS",
  "Azure",
] as const;

export const project_nav = [
  { name: "All Projects", hash: "#All" },
  { name: "Frontend", hash: "#FWeb" }, // Removed extra space
  { name: "Full Stack", hash: "#BWeb" }, // Removed extra space
  { name: "Machine Learning", hash: "#ML" },
  { name: "Data Science", hash: "#DS" },
];
