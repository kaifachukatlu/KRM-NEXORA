"use client";

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from './Projects';
import './Projects.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Use createPortal to break out of any parent stacking contexts (like the z-10 main wrapper)
  // This ensures the modal is always strictly on top of everything, including the Navbar.
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-modal-wrapper"
    >
      {/* Backdrop */}
      <div 
        className="project-modal-backdrop" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="project-modal-container"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="project-modal-close"
        >
          <X size={24} />
        </button>

        {/* Hero Image / Banner */}
        <div className="project-modal-hero">
           {/* Fallback pattern */}
           <div className="project-modal-pattern" />
           <h2 className="project-modal-hero-title">
             {project.title}
           </h2>
        </div>

        {/* Content Body */}
        <div className="project-modal-body">
          
          {/* Main Info */}
          <div className="project-modal-grid">
             <div className="project-modal-main">
                <div>
                  <h3 className="project-modal-heading">Project Overview</h3>
                  <p className="project-modal-text">
                    {project.fullDescription || project.description}
                  </p>
                </div>
             </div>
             
             <div className="project-modal-sidebar">
                <div>
                  <h4 className="sidebar-heading">Role</h4>
                  <p className="sidebar-text">{project.role}</p>
                </div>
                <div>
                  <h4 className="sidebar-heading">Technologies</h4>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className={`project-tag ${project.textAccent}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && project.link !== "#" && (
                  <div style={{ paddingTop: "1rem" }}>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-modal-link"
                    >
                      View Live / GitHub
                    </a>
                  </div>
                )}
             </div>
          </div>

          {/* Photo Gallery */}
          {project.images && project.images.length > 0 && (
            <div>
              <h3 className="project-modal-heading" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Project Gallery</h3>
              <div className="gallery-grid">
                {project.images.map((imgSrc, idx) => (
                  <div key={idx} className="gallery-item">
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} screenshot ${idx + 1}`} 
                      className="gallery-img"
                      onError={(e) => {
                         (e.target as HTMLImageElement).style.display = 'none';
                         const parent = (e.target as HTMLImageElement).parentElement;
                         if (parent && !parent.querySelector('.fallback-text')) {
                           const fallback = document.createElement('div');
                           fallback.className = 'fallback-text';
                           fallback.style.position = 'absolute';
                           fallback.style.inset = '0';
                           fallback.style.display = 'flex';
                           fallback.style.alignItems = 'center';
                           fallback.style.justifyContent = 'center';
                           fallback.style.color = 'rgba(255,255,255,0.5)';
                           fallback.innerText = `Image Placeholder (${imgSrc})`;
                           parent.appendChild(fallback);
                         }
                      }}
                    />
                    <div className="gallery-overlay" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default ProjectModal;
