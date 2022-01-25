import React, { useEffect } from "react";

let data = [
  {
    tag: "js",
    value: "85%",
  },
  {
    tag: "html",
    value: "95%",
  },
  {
    tag: "css",
    value: "80%",
  },
  {
    tag: "react-js",
    value: "70%",
  },
  {
    tag: "scss",
    value: "75%",
  },
  {
    tag: "bootstrap",
    value: "85%",
  },
];
function Skills() {
  useEffect(() => {
    let elem = document.querySelector(".skill-container");
    let pb = document.querySelectorAll(".progressbar");

    let cb = (entries, observer) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          pb.forEach((item) => {
            item.classList.add("active");
          });
        } else {
          pb.forEach((item) => {
            item.classList.remove("active");
          });
        }
      });
    };

    let observer = new IntersectionObserver(cb, { threshold: 0.25 });
    observer.observe(elem);
  }, []);
  return (
    <div className="skill" id="skill">
      <div className="skill-container">
        <h1>My skills</h1>
        {data.map((item) => {
          const { tag, value } = item;
          return (
            <div className="skill-details">
              <h3>{tag}</h3>
              <div className="bar">
                <div className={`progressbar ${tag}`}>{value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
