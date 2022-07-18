import React, { useRef, useEffect } from "react";
import classes from "./Hero.module.css";
import heroImg from "../../assets/hero-img.png";
import Nav from "../Nav/Nav";
import { gsap } from "gsap";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

function Hero() {
  const heroTopTextRef = useRef();
  const heroHeadingRef = useRef(null);
  const heroSubHeadingRef = useRef(null);
  const heroBtnRef = useRef(null);
  const heroStatsRef = useRef(null);
  const heroImgRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      [
        heroTopTextRef.current,
        heroHeadingRef.current,
        heroSubHeadingRef.current,
        heroStatsRef.current,
        heroBtnRef.current,
      ],
      { autoAlpha: 0, y: -10 },
      { autoAlpha: 1, duration: 1, y: 10, stagger: 1.5, delay: 1 }
    );
    gsap.fromTo(
      heroImgRef.current,
      { autoAlpha: 0, x: 30 },
      { duration: 10, autoAlpha: 1, x: -30, delay: 2 }
    );
  }, []);

  return (
    <>
      <div className={classes["hero_container"]} id="home">
        <div className={classes["hero_left"]}>
          <Nav />
          <section>
            <div className={classes["hero_topText"]} ref={heroTopTextRef}>
              <span>delivered swiftly</span>
            </div>
            <h1 className={classes["hero_heading"]} ref={heroHeadingRef}>
              Express home delivery
            </h1>
            <p className={classes["hero_subHeading"]} ref={heroSubHeadingRef}>
              Imagine getting delicious meals, medicine and groceries delivery
              to your door step, immediately you need them
            </p>
            <div className={classes["hero_stats"]} ref={heroStatsRef}>
              <div>
                <CountUp start={0} end={23198} duration={5} delay={5} />
                <span>Customers </span>
              </div>
              <div>
                <CountUp start={0} end={7198} duration={5} delay={5} />

                <span>Items delivered </span>
              </div>
              <div>
                {" "}
                <CountUp start={0} end={324} duration={5} delay={5} />
                <span>Places found</span>
              </div>
            </div>
            <div className={classes["hero_btn_container"]} ref={heroBtnRef}>
              <Link to="/map" className={classes["hero_btn_1"]}>
                Get Route
              </Link>
              <Link to="/places" className={classes["hero_btn_2"]}>
                Find Places
              </Link>
            </div>
          </section>
        </div>
        <div className={classes["hero_right"]}>
          <div>
            <img
              src={heroImg}
              alt={heroImg}
              className={classes["hero_img"]}
              ref={heroImgRef}
            />

            <section className={classes["hero_icons"]}></section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
