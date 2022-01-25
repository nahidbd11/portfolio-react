import React from "react";

function Menu({ open, setOpen }) {
  return (
    <div className={`menu ${open && "active"}`}>
      <ul onClick={() => setOpen(!open)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
