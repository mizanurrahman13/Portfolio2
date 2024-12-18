"use client";
import React from "react";
import "./Contact.scss"
// import Button from "../Button/Button";
import {motion} from "framer-motion";

function Contact() {
  return (
    <motion.div className="contact" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
      >
        <div className="contact__wrapper">
          <h2 className="contact__title">Let's Connect!</h2>
          <h2 className="contact__sub-title">Get in Touch</h2>
          <p className="contact__text">
          I'm always open to new opportunities and collaborations. 
          If you have any questions or ideas, feel free to reach out—I’d love to connect!
          </p>  
          <div className="contact__cta">
              {/* <Button text="Email Me" href="mailto:mlukowich27@gmail.com" /> */}
          </div>
        </div>
    </motion.div>
  )
}

export default Contact