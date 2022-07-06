import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffbf00"
            fill-opacity="1"
            d="M0,192L40,170.7C80,149,160,107,240,122.7C320,139,400,213,480,245.3C560,277,640,267,720,229.3C800,192,880,128,960,133.3C1040,139,1120,213,1200,224C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <section className={classes["footer_container"]}>
          <h4>Delvry People</h4>
          <p>All rights reserved</p>
          <div className={classes["footer_icons"]}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
