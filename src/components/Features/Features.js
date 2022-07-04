import React from "react";
import classes from "./Features.module.css";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CgTrack } from "react-icons/cg";

function Features() {
  return (
    <>
      <div className={classes["feature_container"]}>
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
