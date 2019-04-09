import React from "react";
// import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          Developed and Made with
          <span className="brown"> &#x2665;</span>
          <div className="footer-text-extented">
            by Alexander Kaminskiy &copy; 2019
            <span className="socials">
              <a className="btn" href="https://github.com/aussftw">
                <i className="github icon" />
              </a>
              <a
                className="btn"
                href="https://www.linkedin.com/in/alexander-k-7a7a32165/"
              >
                <i className="linkedin icon" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
