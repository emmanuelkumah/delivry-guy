import React, { useEffect, useRef } from "react";
import classes from "./Reason.module.css";
import rImg1 from "../../assets/reason-img1.png";
import rImg2 from "../../assets/reason2.jpg";
import rImg3 from "../../assets/reason3.jpg";
import { GiAlarmClock } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaRoute, FaSearchLocation } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Reason() {
  const rImgRef = useRef(null);
  const rRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [rImgRef.current, rRef.current],
      { autoAlpha: 0, y: 20 },
      {
        duration: 1.5,
        ease: "slow(0.7, 0.7, false)",
        y: -20,
        autoAlpha: 1,
        delay: 1.5,
        scrollTrigger: {
          trigger: rImgRef.current,

          start: "top center+=80",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <>
      <section className={classes["reasons_container"]}>
        <div className={classes["reasons_img"]} ref={rImgRef}>
          <img src={rImg1} alt={rImg1} />
          <div className={classes["reasons_innerImg"]}>
            <img src={rImg2} alt={rImg2} />
            <img src={rImg3} alt={rImg3} />
          </div>
        </div>
        <div className={classes["reasons_partner"]} ref={rRef}>
          <section>
            <h3>
              <span className={classes.stroke}>Partner</span> with Us
            </h3>

            <h4>Why Choose Us</h4>
            <div className={classes["reasons_why"]}>
              <div>
                <p>
                  <GiAlarmClock className={classes["reasons_icon"]} />
                  Same day delivery
                </p>
              </div>
              <div>
                <p>
                  <BiSupport className={classes["reasons_icon"]} />
                  24/7 Support
                </p>
              </div>
              <div>
                <p>
                  <FaRoute className={classes["reasons_icon"]} />
                  Match Routing
                </p>
              </div>
              <div>
                <p>
                  <FaSearchLocation className={classes["reasons_icon"]} />
                  Tracked deliveries
                </p>
              </div>
              <div>
                <p>
                  <TbTruckDelivery className={classes["reasons_icon"]} />
                  Nationwide deliveries
                </p>
              </div>
              <div>
                <p>
                  <MdOutlineDeliveryDining
                    className={classes["reasons_icon"]}
                  />
                  Smooth conveying
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Reason;
