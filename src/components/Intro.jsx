import React, { useEffect, useRef } from "react";
import { init } from "ityped";
const Intro = () => {
  const typingRef = useRef(null);
  useEffect(() => {
    let elem = typingRef.current;
    init(elem, {
      showCursor: true,
      strings: ["Designer", "Developer", "Content creator"],
      backSpeed: 50,
      backDelay: 1500,
      cursorChar: "|",
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="row">
        <div className="left col-xs-12 col-md-6 scroll-anim">
          <h2>Hi there,I'm </h2>
          <h1>Nahidul Islam</h1>
          <h3>
            Freelance <span ref={typingRef}></span>
          </h3>
        </div>
        <div className="right col-xs-12 col-md-6 ">
          <div className="shape scroll-anim"></div>
          <img
            className="scroll-anim"
            src={require("../assets/mypic3.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
