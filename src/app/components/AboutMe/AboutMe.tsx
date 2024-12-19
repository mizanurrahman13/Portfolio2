"use client";
import React from "react";
import "./AboutMe.scss"
import Link from "next/link";
import Image from "next/image";
import {useEffect, useRef} from "react";
import { useInView, motion } from "framer-motion";


function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("This element is in view:", isInView);
    }, [isInView]);

  return (
    <motion.div className="about" 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
    }}
        >
        <div className="about__title">
            <h2 className="about__title-text">About Me</h2>
        </div>
        <div className="about__grid">
            <div className="about__grid-info">
                <p className="about__grid-info-text">
                    Hi, I&apos;m Maria Lukowich! With a background in Food Research and Development, I bring a unique perspective to web development. I&apos;m passionate about creating user-focused applications and constantly learning new technologies in a collaborative team environment.
                </p>
                <p className="about__grid-info-text">
                    In late 2023, I transitioned to Web Development, starting with <Link href="https://cs50.harvard.edu/x/2024/" className="link" target="_blank">Harvard&apos;s CS50</Link> course, which taught me programming fundamentals. I then deepened my skills with <Link href="https://cs50.harvard.edu/python/2022/" className="link" target="_blank">CS50&apos;s Python</Link> course, focusing on Python and Django.
                </p>
                <p className="about__grid-info-text">
                    This year, I graduated from the <Link href="https://brainstation.io/?utm_keyword=brainstation&utm_network=g&utm_matchtype=e&utm_creative=482567513012&utm_target=&utm_placement=&utm_device=c&utm_campaign=11695264746&utm_adgroup=122203905828&utm_source=AdWords&utm_target_id=kwd-296950415241&gad_source=1&gclid=CjwKCAiAjKu6BhAMEiwAx4UsApPS6vIY18ARb8B-U3_0UbpSexVTfL-_ZBez1Xbaq8Qp4GDLO89QWBoC4s8QAvD_BwE" className="link" target="_blank">BrainStation</Link> Software Engineering Bootcamp. It was an intense 3-month program where I honed my skills in JavaScript, React, Node.js, and worked on a full-stack team project. This shifted my focus from Python to JavaScript.
                </p>
                <p className="about__grid-info-text">
                    Since completing the bootcamp, I&apos;ve been working on personal projects, expanding my skills, and learning Next.js, TypeScript, and Unit Testing.
                </p>
                <p className="about__grid-info-text">
                    Technologies I frequently work with:
                </p>
                <ul className="about__grid-info-list">
                    <li className="about__grid-info-list-item">JavaScript</li>
                    <li className="about__grid-info-list-item">React</li>
                    <li className="about__grid-info-list-item">Node.js</li>
                    <li className="about__grid-info-list-item">Express</li>
                    <li className="about__grid-info-list-item">TypeScript</li>
                    <li className="about__grid-info-list-item">Next.js</li>
                    <li className="about__grid-info-list-item">CSS/SASS</li>
                    <li className="about__grid-info-list-item">Git</li>
                    <li className="about__grid-info-list-item">MySql</li>
                </ul>
            </div>
            <div className="about__grid-image">
                <div className="overlay"></div>
                <div className="overlay__border"></div>
                <div className="about__grid-image-container">
                    <Image src="/images/maria-img.jpg" alt="profile" fill />
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default AboutMe