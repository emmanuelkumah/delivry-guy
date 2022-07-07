import React, { useState, useEffect } from "react";
import classes from "./Nav.module.css";
import { FaTimes, FaBars } from "react-icons/fa";

import { MdOutlineDeliveryDining } from "react-icons/md";

function Nav() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function stickyNavBar() {
    let windowHeight = window.scrollY;
    console.log(windowHeight);
    windowHeight > 200 ? setIsSticky(true) : setIsSticky(false);
  }

  function handleMenuIconClick() {
    setIsMenuClicked(!isMenuClicked);
  }
  useEffect(() => {
    window.addEventListener("scroll", stickyNavBar);
  }, []);

  return (
    <>
      <nav
        className={`${classes["nav_container"]} ${
          isSticky && classes["sticky"]
        }`}
        id="nav"
      >
        <div className={classes["nav_brand"]}>
          <h1>Delvry Guy</h1>
          <MdOutlineDeliveryDining className={classes["nav_icon"]} />
        </div>
        <div className={classes["nav_menu-icon"]} onClick={handleMenuIconClick}>
          {isMenuClicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${!isMenuClicked ? classes["nav_menu"] : ""}`}>
          <li>Home</li>
          <li>Services</li>
          <li>Why Us</li>
          <li>Go Mobile</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
