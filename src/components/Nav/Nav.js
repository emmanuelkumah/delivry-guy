import React, { useState, useEffect } from "react";
import classes from "./Nav.module.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

function Nav() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function stickyNavBar() {
    let windowHeight = window.scrollY;
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
        <div>
          <Link to="/" className={classes["nav_brand"]}>
            <h1>Delvry Guy</h1>
            <MdOutlineDeliveryDining className={classes["nav_icon"]} />
          </Link>
        </div>
        <div className={classes["nav_menu-icon"]} onClick={handleMenuIconClick}>
          {isMenuClicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${!isMenuClicked ? classes["nav_menu"] : ""}`}>
          <li>
            <Link to="#home" smooth className={classes["nav_Links"]}>
              Home
            </Link>
          </li>
          <li>
            <Link to="#feature" smooth className={classes["nav_Links"]}>
              Why Us
            </Link>
          </li>
          <li>
            <Link to="#reasons" smooth className={classes["nav_Links"]}>
              Join Us
            </Link>
          </li>
          <li>
            <Link to="#pricing" smooth className={classes["nav_Links"]}>
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
