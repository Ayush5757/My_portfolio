import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <div className="socials">
            {socialImgs.map((img) => (
              <a href={img.url} className="icon" target="_blank" key={img.url}>
                <img src={img.imgPath} />
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className="flex flex-col items-center mt-10 mb-10">
        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
          @Ayush Mishra
        </p>
        <p className="text-white-50 text-center md:text-xl relative z-10 pointer-events-none mt-5">
          Thank you for visiting my portfolio. I truly appreciate your time and
          interest in my work.
        </p>
      </div>
    </>
  );
};

export default Footer;
