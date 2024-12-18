"use client";
import React from "react";
import "./Hero.scss"
import Link from "next/link";
import Button from "../Button/Button";
import {motion} from "framer-motion";


function Hero() {

  return (
    <div className="hero">
      <motion.h1 className="hero__title"
      >Hi, my name is </motion.h1>
      <motion.h2 className="hero__title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >Maria Lukowich</motion.h2>
      <motion.h3 className="hero__title-large hero__title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >Web Developer</motion.h3>
      <motion.p className="hero__text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I'm a Food Researcher turned Web Developer. I love creating user-focused 
        web applications and learning new technologies. My current focus is on&nbsp;
        <Link href="https://www.typescriptlang.org/" target="_blank" className="link">TypeScript</Link> and&nbsp; 
        <Link href="https://nextjs.org/" target="_blank" className="link">Next.js</Link>.
      </motion.p>
      <motion.div className="hero__btn"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button text="Check out my Linkedin" 
        href="https://www.linkedin.com/in/maria-lukowich/"></Button>
      </motion.div>
    </div>
  )
}

export default Hero