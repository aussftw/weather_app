import React from "react";
// import "./_Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          Developed by Alexander Kaminskiy &copy; 2019
            <span className="socials">
            <a className="btn" href="https://github.com/aussftw">
              <i className="large github icon" />
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/alexander-kaminskiy/"
            >
              <i className="large linkedin icon" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
