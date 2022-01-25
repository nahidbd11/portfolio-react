import React, { useEffect } from "react";

function About() {
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="aboutContainer">
        <div className="left scroll-anim">
          <div className="imgContainer">
            <div className="shape"></div>
            <img src={require(`../assets/mypic2.png`)} alt="" />
          </div>
        </div>
        <div className="right scroll-anim">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptate tempore praesentium iusto, necessitatibus
            tenetur molestias assumenda optio sit eum, omnis ipsa magnam placeat
            natus magni similique reiciendis nam laudantium.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptate tempore praesentium iusto, necessitatibus
            tenetur molestias assumenda optio sit eum, omnis ipsa magnam placeat
            natus magni similique reiciendis nam laudantium.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptate tempore praesentium iusto, necessitatibus
            tenetur molestias assumenda optio sit eum, omnis ipsa magnam placeat
            natus magni similique reiciendis nam laudantium.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            veritatis mollitia corrupti suscipit sint, vitae praesentium
            exercitationem inventore aspernatur dignissimos deserunt facere qui
            eligendi! Dolor nam ipsam adipisci qui fugiat culpa in asperiores
            minima error corporis ut recusandae voluptatibus voluptatem voluptas
            placeat animi, voluptates eum ab ratione dignissimos possimus! In?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
