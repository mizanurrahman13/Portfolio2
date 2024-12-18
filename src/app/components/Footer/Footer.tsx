"use client";
import React from "react";
import Link from "next/link";
import "./Footer.scss";
import { useEffect, useState} from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Footer() {
  const [githubInfo, setGithubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/Marie-L1/Portfolio")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGithubInfo({
          stars: stargazers_count,
          forks: forks_count
        });
      })
  }, []);

  return (
    <footer className="footer">
      <Link href="https://github.com/Marie-L1" className="footer__link" target="_blank">
        <span className="footer__info">Created by Maria Lukowich.</span>
        {githubInfo && (
          <div className="footer__github">
            <div className="footer__github-item">
              <FaRegStar className="footer__github-icon" />
              <span className="footer__github-amount">{githubInfo.stars}</span>
            </div>
            <div className="footer__github-item">
              <FiGithub className="footer__github-icon" />
              <span className="footer__github-amount">{githubInfo.forks}</span>
            </div>
          </div>
        )}
      </Link>
    </footer>
  )
}

export default Footer