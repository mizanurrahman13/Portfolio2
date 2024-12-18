"use client";
import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import Link from "next/link";
import Button from "../Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

function NavBar() {
  const [navBarVisible, setNavBarVisible] = useState(false);
  const [responsiveToggle, setResponsiveToggle] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);

  const sectionLinks = [
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100 ? setNavBarVisible(true) : setNavBarVisible(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav__link-item");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav__items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  return (
    <nav className={`nav ${navBarVisible ? "nav--visible" : ""}`}>
      <div className={`nav__wrapper`}>
        <motion.div
          className="nav__brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link className="nav__link" href="https://github.com/Marie-L1">
            <img className="nav__logo" src="/images/m-logo-2.svg" alt="logo" />
          </Link>
        </motion.div>

        <motion.div
          className="nav__toggle"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {responsiveToggle ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveToggle(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveToggle(true);
              }}
            />
          )}
        </motion.div>

        <div className={`nav__items ${responsiveToggle ? "nav__items--active" : ""}`}>
          <ul className="nav__list">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav__list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              >
                <Link className="nav__link-item" href={link}>
                  {name}
                </Link>
              </motion.li>
            ))}
            <motion.div
              className="nav__button"
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <Button text="Resume" href="/resume.pdf" />
            </motion.div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
