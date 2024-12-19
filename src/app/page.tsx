import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Email from "./components/Email/Email";

export default function Home() {
  return (
    <>
    <NavBar />
    <SideBar />
    <Email />
    <main>
      <Hero />
      <AboutMe />
      <Education />
      <Projects />
      <Contact />
    </main>
      <Footer />
    </>
  );
}
