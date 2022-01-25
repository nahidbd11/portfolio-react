import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
let imgData = [
  {
    imgsrc: "nsasslib.png",
    title:
      "Built own css framework using sass and built a responsive landing page by using it",
    description:
      "First i built a simple css framework like bootstrap and named it nsass. I used sass to built it.Then i made a landing page by using my own css Framework.It is fully responsive",
    projectLink: "https://nsasslibsite.netlify.app/",
  },
  {
    imgsrc: "webfoodapp.png",
    title: "Food app ui with ReactJs and React Router",
    description:
      "This food app has made with reactjs and react router it has different category food menu.And by clicking any category it will show different food items without refreshing the webpage",
    projectLink: "https://nahidbd.netlify.app/",
  },
  {
    imgsrc: "webmui3.png",
    title: "Blog Ui using Material ui with ReactJs",
    description:
      "This is a simple landing ui with material ui.It has functionality to create blog and add image.Update categories.show gallery in sidebar",
    projectLink: "https://nahidmuireact.netlify.app",
  },
  {
    imgsrc: "webquotesgen.png",
    title: "Generate Random quotes of famous person",
    description:
      "This is a very nice and easy project.This app generate Random quotes of different famous person all over the world",
    projectLink: "https://nahidquotegen.netlify.app/",
  },
  {
    imgsrc: "webparallax.png",
    title:
      "Parallax effect in webpage using vanila css and transition,transform",
    description:
      "I used parallax effect and other transition animation in this webpage.It has different hover effect",
    projectLink: "https://parallaxsp.netlify.app/",
  },
  {
    imgsrc: "webfoodapp.png",
    title:
      "Parallax effect in webpage using vanila css and transition,transform",
    description:
      "I used parallax effect and other transition animation in this webpage.It has different hover effect",
    projectLink: "https://parallaxsp.netlify.app/",
  },
];
function Slider() {
  let [currentSlide, setCurrentSlide] = useState(0);
  const prevslide = () => {
    let current = currentSlide === 0 ? imgData.length - 1 : currentSlide - 1;
    console.log(current);
    setCurrentSlide(current);
  };
  const nextSlide = () => {
    let current = currentSlide === imgData.length - 1 ? 0 : currentSlide + 1;
    console.log(imgData.length);
    setCurrentSlide(current);
    console.log("current slide click");
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {imgData.map((item, index) => {
          const { title, description, projectLink, imgsrc } = item;
          return (
            <div className="container" key={index}>
              <div className="item">
                <div className="left">
                  <h1>MY Works</h1>
                  <h3>{title}</h3>
                  <h5>Description:</h5>
                  <p>{description}</p>
                  <h5>project link:</h5>
                  <a href={projectLink} target="_blank" rel="noreferrer">
                    {projectLink}
                  </a>
                </div>
                <div className="right">
                  <img
                    // className={`${index === currentSlide && "active"}`}
                    src={require(`../assets/${item.imgsrc}`)}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <BsFillArrowLeftCircleFill
        className="left-arrow"
        onClick={prevslide}
        size="2rem"
      />
      <BsFillArrowRightCircleFill
        className="right-arrow"
        onClick={nextSlide}
        size="2rem"
      />
    </div>
  );
}

export default Slider;
