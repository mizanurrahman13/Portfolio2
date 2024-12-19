"use client";
import React from "react";
import "./Projects.scss";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";


function Projects() {
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const projects = [
    {
      image: "/images/campscape.jpg",
      projectName: "Campscape",
      projectVideo: "https://youtube.com/embed/XBgdrdt1qrc",
      projectDescription: "A frontend campsite review platform built with Next.js and TypeScript designed to help users discover and explore campsites in Alberta.",
      projectTech: [
        "Next.js",
        "React",
        "SASS",
        "Typescript",
      ],
      projectExternalLinks: {
        FiGithub: "https://github.com/Marie-L1/Campscape",
        FiExternalLink: "https://campscape1.vercel.app/",
      }
    },
    {
      image: "/images/trivia.png",
      projectName: "Trivia Quest",
      projectVideo: "https://youtube.com/embed/eHlyteWAm78",
      projectDescription: "A frontend interactive quiz web app created with React and TypeScript. The app allows users to answer questions related to family-friendly video games, anime, and fantasy themes.",
      projectTech: [
        "React",
        "SASS",
        "Typescript",
        "JSON Data"
      ],
      projectExternalLinks: {
        FiGithub: "https://github.com/Marie-L1/Trivia-Quest",
        FiExternalLink: "https://trivia-quest-ashy.vercel.app/",
      }
    },
    {
      image: "/images/ShelfSage.jpg",
      projectName: "ShelfSage",
      projectVideo: "https://youtube.com/embed/gGoOFMZcdfQ",
      projectDescription: "A full-stack web app designed for book lovers to effortlessly manage their book collections, track and achieve monthly reading goals, and receive personalized book recommendations based on their reading habits and preferences.",
      projectTech: [
        "React",
        "SASS",
        "Node.js",
        "Express",
        "Custom Middleware",
        "REST APIs",
        "JWT",
        "MySQL"
      ],
      projectExternalLinks: {
        FiGithub: "https://github.com/Marie-L1/ShelfSage-FrontEnd",
        FiExternalLink: "https://github.com/Marie-L1/ShelfSage-BackEnd",
      }
    },
    {
      image: "/images/instock.jpg",
      projectName: "InStock",
      projectVideo: "https://youtube.com/embed/IT7HCnOAi0M",
      projectDescription: "A team-based, agile project management experience where roles were assigned based on comfort with front-end and back-end technologies.",
      projectTech: [
        "React",
        "SASS",
        "Node.js",
        "Express",
        "Custom Middleware",
        "REST APIs",
        "MySQL"
      ],
      projectExternalLinks: {
        FiGithub: "https://github.com/Marie-L1/Crimson-Falcons-InStock-Backend",
        FiExternalLink: "https://github.com/Marie-L1/Crimson-Falcons-InStock-Backend",
      }
    },
  ]

  const handleModalOpen = (projectVideo: string) => {
    setModalVideo(projectVideo);
  }

  const handleModalClose = () => {
    setModalVideo(null);
  }

  return (
    <section className="projects" id="projects">
      <motion.div className="projects__title-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2 className="projects__title">My Projects</h2>
      </motion.div>
      <div className="projects__container">
        {projects.map(
          ({
            image,
            projectDescription,
            projectName,
            projectTech,
            projectVideo,
            projectExternalLinks,
          }) => (
            <motion.div className="projects__item" 
              key={projectName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              <div
                className="projects__image"
                onClick={() => handleModalOpen(projectVideo)}
              >
                <div className="projects__image-overlay"></div>
                <div className="projects__image-container">
                  <Image
                    className="projects__image-container-image"
                    src={image}
                    alt={projectName}
                    quality={100}
                    width={400}
                    height={250}
                  />
                </div>
              </div>
              <div className="projects__info">
                <p className="projects__info-overlay">Featured Project</p>
                <h3 className="projects__info-title">{projectName}</h3>
                <div className="projects__info-description">
                  <p className="projects__info-description-text">{projectDescription}</p>
                </div>
                <ul className="projects__info-tech-list">
                  {projectTech.map((tech) => (
                    <li
                      key={tech}
                      className="projects__info-tech-list-item"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className="projects__info-links">
                  <li className="projects__info-links-item">
                    <Link
                      href={projectExternalLinks.FiGithub}
                      target="_blank"
                      className="projects__info-links-item-link"
                    >
                      <FiGithub />
                    </Link>
                  </li>
                  {projectExternalLinks.FiExternalLink && (
                    <li className="projects__info-links-item">
                      <Link
                        href={projectExternalLinks.FiExternalLink}
                        target="_blank"
                        className="projects__info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* Modal */}
      {modalVideo && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={handleModalClose}>
              &times;
            </button>
            <iframe
              src={modalVideo}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Project Video"
              className="modal__video"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects