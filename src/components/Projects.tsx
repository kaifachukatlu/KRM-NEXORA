"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import ProjectModal from './ProjectModal';
import SpotlightCard from './SpotlightCard';
import './Projects.css';

export interface Project {
  title: string;
  badge: string;
  tags: string[];
  description: string;
  fullDescription?: string;
  role?: string;
  images?: string[];
  accent: string;
  bgAccent: string;
  textAccent: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "AI-Enabled Smart Medical Kit",
    badge: "Patent Filed 🏅",
    tags: ["ML", "NLP", "Computer Vision", "Healthcare"],
    description: "AI-powered portable diagnostic device with ML diagnostics, NLP symptom checker, and computer vision medicine identification. Designed for rural environments.",
    fullDescription: "An end-to-end portable AI diagnostic device tailored for rural areas lacking immediate medical infrastructure. It integrates Machine Learning models for preliminary diagnostics, a Natural Language Processing module to act as a symptom checker, and Computer Vision to accurately identify medicines from images. This project aims to bridge the healthcare gap using accessible AI technology.",
    role: "Lead Developer & ML Engineer",
    images: ["/medical-kit-1.png", "/medical-kit-2.png", "/medical-kit-3.png"],
    accent: "accent-violet",
    bgAccent: "",
    textAccent: "text-violet",
    link: "#" // Add your GitHub or project link here
  },
  {
    title: "IoT-Enabled Automated Irrigation",
    badge: "35% Water Saved 💧",
    tags: ["Arduino", "IoT", "Sensors"],
    description: "Smart agriculture system using Arduino & soil moisture sensors. Automated irrigation via sensor fusion, reducing estimated water usage by ~35%.",
    fullDescription: "A smart agriculture framework built with Arduino and an array of IoT sensors (soil moisture, temperature, humidity). The system employs sensor fusion to intelligently automate irrigation cycles, ensuring crops receive precise watering. This approach not only optimized plant growth but also demonstrated a significant 35% reduction in overall water usage.",
    role: "Hardware & IoT Developer",
    images: ["/irrigation.jpg"],
    accent: "accent-cyan",
    bgAccent: "",
    textAccent: "text-cyan",
    link: "#" // Add your GitHub or project link here
  },
  {
    title: "Fingerprint-Based Voting System",
    badge: "NBA Presented 🏆",
    tags: ["Biometrics", "Hardware", "Security"],
    description: "Biometric authentication voting system eliminating impersonation. Selected and presented at NBA (National Board of Accreditation) college evaluation.",
    fullDescription: "A highly secure electronic voting system relying on biometric fingerprint authentication to completely eliminate voter impersonation and fraud. The system was designed with robust hardware integration and secure data logging. Its effectiveness and innovation led to it being selected for presentation during the prestigious National Board of Accreditation (NBA) college evaluation.",
    role: "Security Systems Engineer",
    images: ["/voting-group.jpg", "/voting-1.png", "/voting-2.png", "/voting-3.png", "/voting-4.png"],
    accent: "accent-emerald",
    bgAccent: "",
    textAccent: "text-emerald",
    link: "#" // Add your GitHub or project link here
  },
  {
    title: "Interactive Web Portfolio",
    badge: "Premium Design ✨",
    tags: ["Next.js", "React", "Three.js", "Framer Motion"],
    description: "High-end interactive personal portfolio featuring 3D elements, advanced animations, and premium glassmorphic UI design.",
    fullDescription: "A premium web portfolio developed to showcase work in a highly interactive environment. The project heavily utilizes Three.js for 3D elements, GSAP and Framer Motion for scroll-driven animations, and features stunning modern UI trends like glassmorphism to create a lasting impression.",
    role: "Frontend Developer & UI/UX Designer",
    images: [],
    accent: "accent-pink",
    bgAccent: "",
    textAccent: "text-pink",
    link: "https://achukatulu-kaif.vercel.app/"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (

    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="mb-4"
            textClassName="projects-title"
          >
            Featured Projects
          </ScrollFloat>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <SpotlightCard
                spotlightColor={
                  project.title.includes("Medical") 
                    ? "rgba(139, 92, 246, 0.25)" 
                    : project.title.includes("Irrigation") 
                    ? "rgba(6, 182, 212, 0.25)" 
                    : "rgba(16, 185, 129, 0.25)"
                }
                className={`project-card ${project.accent}`}
              >
                {/* Badge */}
                <div className="project-badge">
                  {project.badge}
                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-desc">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className={`project-tag ${project.textAccent}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  className={`project-btn ${project.textAccent}`}
                  onClick={() => setSelectedProject(project)}
                >
                  View Details <ArrowRight size={16} />
                </button>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
