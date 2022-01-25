import React from "react";
import { AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Navbar = ({ open, setOpen }) => {
  return (
    <div className={`navbar ${open && "active"}`}>
      <div className="wrapper">
        {/* TODO:for logo and contact */}
        <div className="left">
          <div className="logo">
            <h1>Nahid.</h1>
          </div>
          <p>
            <MdEmail />
            <cite>diegonahid@gmail.com</cite>
          </p>
          <p>
            <AiOutlinePhone />
            <cite>+8801830387780</cite>
          </p>
        </div>
        {/* TODO:for menu */}
        <div className="right">
          <div className="humberger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
