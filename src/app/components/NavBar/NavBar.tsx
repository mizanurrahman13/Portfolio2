"use client";
import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import Link from "next/link";
import { motion } from "framer-motion";

function NavBar() {
  const [navBarVisible, setNavBarVisible] = useState(false);

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

        <div className="nav__items">
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;