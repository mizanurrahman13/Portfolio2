"use client";
import "./Education.scss";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Education() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".education__slider-underline");
      if (underline) {
        console.log("Updating underline top:", `${selected * 2.5}rem`);
        underline.style.top = `${selected * 2.5}rem`;
      }
    };
    transformSelected();
  }, [selected]);

  const educations = [ 
    {
      label: "Unit Testing",
      name: "Introduction to Unit Testing, Certificate",
      school: "Scrimba",
      url: "https://scrimba.com/introduction-to-unit-testing-c01i",
      completed: "November, 2024",
      shortDescription: [
        "I learnt the fundamentals of unit testing, focusing on test grouping, debugging, and writing test cases to ensure code reliability.",
        "I explored techniques like spies and the 3 A's (Arrange, Act, Assert) to make testing efficient and effective.",
        "I worked with Jasmine to create tests that help improve code quality and minimize bugs.",
        "I learned how to use unit testing to improve code quality and maintainability in JavaScript projects."
      ],
    },
    {
      label: "TypeScript",
      name: "Learning TypeScript, Certificate",
      school: "Scrimba",
      url: "https://scrimba.com/learn-typescript-c03c",
      completed: "October, 2024",
      shortDescription: [
        "I gained a solid foundation in TypeScript, learning how to add type safety and enhance code quality in JavaScript applications.",
        "I focused on understanding interfaces, types, and modules to structure code in a more predictable and scalable way.",
        "I  developed the ability to apply TypeScript in real-world applications.",
        "I learned how to use TypeScript to improve code quality and maintainability in JavaScript projects."

      ],
    },
    {
      label: "SWE Bootcamp",
      name: "Software Engineering, Diploma",
      school: "BrainStation",
      url: "https://brainstation.io/online/software-engineering-bootcamp",
      completed: "September,2024",
      shortDescription: [
        "This immersive bootcamp covered a wide range of topics including full-stack development, agile methodologies, and modern web technologies like React and Node.js.",
        "I worked on building complex, interactive web applications, focusing on user-centric design and robust backend systems.",
        "The program emphasized collaboration and problem-solving, where I gained valuable experience in team environments and real-world project development.",
        "I honed my skills in building scalable REST APIs and optimizing web applications for performance and user experience."
      ],
    },
    {
      label: "CS50P",
      name: "Introduction to Programming with Python, Certificate",
      school: "Harvard, CS50",
      url: "https://cs50.harvard.edu/python/2022/",
      completed: "February, 2024",
      shortDescription: [
        "I learnt the fundamentals of programming with Python, focusing on data structures, algorithms, and problem-solving.",
        "I worked on projects that challenged me to solve problems by applying fundamental programming techniques.",
        "The course focused on developing clear and logical code while tackling real-world scenarios like data analysis and automation.",
      ],
    },
    {
      label: "CS50X",
      name: "Introduction to Computer Science, Certificate",
      school: "Harvard, CS50",
      url: "https://cs50.harvard.edu/x/2024/",
      completed: "November, 2023",
      shortDescription: [
        "This course introduced core computer science principles, including algorithms, data structures, and basic programming logic.",
        "I gained hands-on experience with C and Python, applying theoretical concepts to practical coding problems.",
        "The curriculum emphasized critical thinking and developing efficient solutions to complex challenges."
      ],
    },
    {
      label: "Food Technology",
      name: "Food Technology, Safety, and Quality, Diploma",
      school: "Academy of Applied Pharmaceutical Sciences",
      url: "https://www.aaps.ca/diploma/food-and-edible-technology-safety-and-quality-diploma-program",
      completed: "July,2023",
      shortDescription: [
        "This program focused on the science of food production, safety protocols, and quality assurance methods.",
        "I learned how to apply regulatory standards to ensure food safety and product consistency across various food industries.",
        "The coursework covered topics such as food microbiology, nutrition, and sensory analysis, with practical experience in quality control processes."
      ],
    },
    {
      label: "Culinary Arts",
      name: "Culinary Arts, Diploma",
      school: "Northern Alberta Institute of Technology",
      url: "https://www.nait.ca/programs/culinary-arts?term=2024-fall&intake=6b723556-e7bd-44ba-b475-54aef2cf8a37&gad_source=1&gclid=CjwKCAiAmMC6BhA6EiwAdN5iLRT3g1NZqr_vjY_fjjeMx0hEdCISs5_gOz6kLZS9l8eXWBzGW-PlERoCWTEQAvD_BwE",
      completed: "April, 2021",
      shortDescription: [
        "The program provided hands-on training in professional kitchens, focusing on food preparation, plating, and kitchen management.",
        "Developed hands-on culinary skills while learning about kitchen management and menu planning.",
        "Gained experience working with diverse cuisines and mastering cooking techniques.",
        "The program emphasized collaboration and problem-solving, where I gained valuable experience in team environments and real-world project development."
      ],
    },
  ]

  return (
    <motion.div className="education" 
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
      >
      <div className="education__title-wrapper">
        <h2 className="education__title">Education and Certificates</h2>
      </div>
      <div className="education__container">
      <ul className="education__slider">
        <div className="education__slider-underline" />
        {educations.map((education, index) => {
          return (
            <li
              key={index}
              className={`education__slider-item ${index === selected ? "education__slider-item-selected" : ""}`}
              onClick={() => setSelected(index)} // Change selected index on click
            >
              <span className="education__slider-item-name">{education.label}</span>
            </li>
          );
        })}
      </ul>
        <div className="education__details">
          <div className="education__details-position">
            <h3 className="education__details-position-wrapper">
              <span>{educations[selected].name}</span>
              <span className="education__details-position-school">
                &nbsp;at&nbsp;
                <Link className="link" href={educations[selected].url} target="_blank">{educations[selected].school}</Link>
              </span>
            </h3>
            <p className="education__details-period">Completed:&nbsp;{educations[selected].completed}</p>
            <ul className="education__details-list">
              {
                educations[selected].shortDescription.map((description, index) => {
                  return (
                    <li key={index} className="education__details-list-item">
                      {description}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Education