import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="shape"></div>
      <div className="contact-container ">
        <div className="left scroll-anim">
          <h1>Get in touch with us</h1>
          <img src={require("../assets/handshake.png")} alt="" />
        </div>
        <div className="right scroll-anim">
          <div className="form-wrapper">
            <form action="">
              <div className="form-elem">
                <h3>Name</h3>
                <input type="text" placeholder="your name" />
              </div>
              <div className="form-elem">
                <h3>email</h3>
                <input type="email" placeholder="your email" />
              </div>

              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                placeholder="your message"
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
