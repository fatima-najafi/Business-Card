import React from "react";
import Footer from "./Footer";
import "./style.css";
export default function Content() {
  return (
    <div>
      <div className="components">
        <div className="container">
          <img src="src/assets/image.jpg" alt="" className="img" />
          <div className="content">
            <div className="info">
              <h1>Fatima Najafi</h1>
              <h3>Full Stack Developer</h3>
              <p>Fatima website</p>
            </div>
            <div className="email-container">
              <img src="src/assets/Mail.png" alt="" />
              <p> Email</p>
            </div>
            <div className="information">
              <div className="about">
                <h3>About</h3>
                <p>
                  I am a frontend developer with a particular interest in making
                  things simple and automating daily tasks. I try to keep up
                  with security and best practices, and am always looking for
                  new things to learn.
                </p>
              </div>
              <div className="interests">
                <h3>Interests</h3>
                <p>
                  Food expert. Music scholar. Reader. Internet fanatic. Bacon
                  buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                  fanatic.
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
