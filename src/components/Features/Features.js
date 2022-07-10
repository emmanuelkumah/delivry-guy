import React, { useEffect, useRef } from "react";
import classes from "./Features.module.css";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CgTrack } from "react-icons/cg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Features() {
  const featureRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      featureRef.current,
      { autoAlpha: 0, y: 20 },
      {
        duration: 1.5,
        ease: "slow(0.7, 0.7, false)",
        y: -20,
        autoAlpha: 1,
        delay: 1.5,
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top center+=80",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className={classes["feature_container"]} ref={featureRef}>
        <section>
          <h2 className={classes["feature_title"]}>
            Your Preffered Delivery Partner
          </h2>
        </section>
        <div className={classes.features}>
          <div className={classes["feature_one"]}>
            <MdDeliveryDining className={classes["feature_icon"]} />
            <h3>Pick Up Services</h3>

            <p>
              We provide nationwide pickup services, we come right to your door
              steps Mollit tempor nisi id proident pariatur aute pariatur
              reprehenderit.
            </p>
          </div>
          <div className={classes["feature_two"]}>
            <AiOutlineFieldTime className={classes["feature_icon"]} />
            <h3>Same Day Delivery</h3>
            <p>
              We are a true 24/7 company that takes pride in our ability to
              always be there for you, no matter the time or the day.
            </p>
          </div>
          <div className={classes["feature_three"]}>
            <CgTrack className={classes["feature_icon"]} />
            <h3>Tracking</h3>
            <p>
              Monitor your delivery every step of the way. Mollit tempor nisi id
              proident pariatur aute pariatur reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
