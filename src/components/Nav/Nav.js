import React from "react";
import classes from "./Nav.module.css";
import { MdOutlineDeliveryDining } from "react-icons/md";

function Nav() {
  return (
    <>
      <nav className={classes["nav_container"]} id="nav">
        <div className={classes["nav_brand"]}>
          <h1>Delvry Guy</h1>
          <MdOutlineDeliveryDining className={classes["nav_icon"]} />
        </div>
        <ul className={classes["nav_menu"]}>
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
