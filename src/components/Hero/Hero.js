import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../../assets/hero-img.png";
import burgerImg from "../../assets/burger.png";
import arrowImg from "../../assets/arrow.png";
import arrow2Img from "../../assets/arrow2.png";
import dGuy from "../../assets/delvry.png";
import Nav from "../Nav/Nav";

function Hero() {
  return (
    <>
      <div className={classes["hero_container"]}>
        <div className={classes["hero_left"]}>
          <Nav />

          <section>
            <div className={classes["hero_topText"]}>
              <span>delivered swiftly</span>
            </div>
            <h1 className={classes["hero_heading"]}>Express home delivery</h1>
            <p className={classes["hero_subHeading"]}>
              Imagine getting delicious meals, medicine and groceries delivery
              to your door step, immediately you need them
            </p>
            <div className={classes["hero_stats"]}>
              <div>
                <span>+2342</span>
                <span>Customers </span>
              </div>
              <div>
                <span>+10323</span>
                <span>Items delivered </span>
              </div>
              <div>
                <span>+293</span>
                <span>Services</span>
              </div>
            </div>
            <div className={classes["hero_btn"]}>
              <button>Get Started</button>
              <button>Learn More</button>
            </div>
          </section>
        </div>
        <div className={classes["hero_right"]}>
          <img src={heroImg} alt={heroImg} className={classes["hero_img"]} />
          <section className={classes["hero_icons"]}>
            <img src={arrowImg} alt={arrowImg} />
            <img src={burgerImg} alt={burgerImg} />
            <img src={arrow2Img} alt={arrow2Img} />
            <img src={dGuy} alt={dGuy} />
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;
