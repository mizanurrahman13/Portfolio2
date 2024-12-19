"use client";
import Link from "next/link";
import React from "react";
import "./SideBar.scss"
import{ FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

function SideBar() {
    const socialLinks = [
        { name: "Github", 
          link: "https://github.com/Marie-L1", 
          icon: <FiGithub /> },
        { name: "Instagram", 
          link: "https://www.instagram.com/maria_lukowich/", 
          icon: <FiInstagram /> },
        { name: "Linkedin", 
          link: "https://www.linkedin.com/in/maria-lukowich/", 
          icon: <FiLinkedin /> },
    ]

  return (
    <motion.div className="sidebar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.90,
      }}
    >
        <ul className="sidebar__list">
            {
                socialLinks.map(({name, link, icon}) => (
                    <li key={name} className="sidebar__list-item">
                        <Link href={link} className="sidebar__list-item-link" target="_blank">{icon}</Link>
                    </li>
                ))
            }
        </ul>
    </motion.div>
  )
}

export default SideBar