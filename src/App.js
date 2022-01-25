import logo from "./logo.svg";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // AOS.init({
    //   mirror: true,
    //   duration: 1000,
    // });

    /***********TODO:scroll animation****** */
    let elems = document.querySelectorAll(".scroll-anim");
    let cb = (entries, observer) => {
      // console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };
    let observer = new IntersectionObserver(cb, {
      threshold: 0.25,
    });
    elems.forEach((elem) => {
      observer.observe(elem);
    });
  }, []);

  return (
    <div id="home">
      <Navbar {...{ open, setOpen }} />
      <Menu {...{ open, setOpen }} />
      <div className="sections">
        <Intro />
        <About />
        <Slider />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
