import React, { useEffect, useRef } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaChessKing, FaRegKissWinkHeart } from "react-icons/fa";
import { BsBookmarkCheck } from "react-icons/bs";
import classes from "./Pricing.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Pricing() {
  const pricingRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      pricingRef.current,
      { autoAlpha: 0, y: 20 },
      {
        duration: 1,
        ease: "slow(0.7, 0.7, false)",
        y: -20,
        autoAlpha: 1,
        delay: 3,
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <section className={classes["pricing_container"]} ref={pricingRef}>
        <h3>Ready to start your journey with us</h3>

        <div className={classes["pricing_section"]}>
          <section className={classes["pricing_details"]}>
            <FaRegKissWinkHeart className={classes["pricing_icon"]} />
            <h4>Basic Plan</h4>
            <p>
              $23.00 <span>per month</span>
            </p>
            <div className={classes["pricing_items"]}>
              <p>
                <BsBookmarkCheck className={classes["pricing_detls-icon"]} />
                free consultation
              </p>
              <p>
                <BsBookmarkCheck className={classes["pricing_detls-icon"]} />
                Sign up 5 delivery guys
              </p>
              <p>
                <BsBookmarkCheck className={classes["pricing_detls-icon"]} /> 12
                months support
              </p>
            </div>
          </section>
          <section className={classes["pricing_details"]}>
            <FaChessKing className={classes["pricing_icon"]} />

            <h4>Premium Plan</h4>
            <p>
              $83.00 <span>per month</span>
            </p>
            <div className={classes["pricing_items"]}>
              <p>
                {" "}
                <BsBookmarkCheck className={classes["pricing_detls-icon"]} />
                free consultation
              </p>
              <p>
                {" "}
                <BsBookmarkCheck className={classes["pricing_detls-icon"]} />
                Sign up unlimited delivery guys
              </p>
              <p>
                <BsBookmarkCheck className={classes["pricing_detls-icon"]} />
                Life Time Support
              </p>
            </div>
          </section>
          <section className={classes["pricing_details"]}>
            <BiDonateHeart className={classes["pricing_icon"]} />
            <h4>Standard Plan</h4>
            <p>
              $ 40.00 <span>per month</span>
            </p>
            <div className={classes["pricing_items"]}>
              <p>
                <BsBookmarkCheck className={classes["pricing_detls-icon"]} />
                free consultation
              </p>
              <p>
                <BsBookmarkCheck className={classes["pricing_detls-icon"]} />
                Sign up 2 delivery guys
              </p>
              <p>
                <BsBookmarkCheck className={classes["pricing_detls-icon"]} /> 6
                months support
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Pricing;
