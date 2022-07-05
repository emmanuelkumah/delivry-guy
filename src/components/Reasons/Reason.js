import React from "react";
import classes from "./Reason.module.css";
import rImg1 from "../../assets/reason-img1.png";
import rImg2 from "../../assets/reason2.jpg";
import rImg3 from "../../assets/reason3.jpg";
function Reason() {
  return (
    <>
      <section className={classes["reasons_container"]}>
        <div className={classes["reasons_img"]}>
          <img src={rImg1} alt={rImg1} />
          <div className={classes["reasons_innerImg"]}>
            <img src={rImg2} alt={rImg2} />
            <img src={rImg3} alt={rImg3} />
          </div>
        </div>
        <div className={classes["reasons_partner"]}>
          <h3>Partner with US</h3>

          <p>
            Deserunt consequat sit exercitation non occaecat elit amet id
            consectetur incididunt. Laborum pariatur enim magna culpa ad quis
            occaecat cillum excepteur irure Lorem velit aliqua. Commodo id aute
            sint cillum est reprehenderit sit culpa eu dolor voluptate. Deserunt
            pariatur tempor veniam officia est labore do in ad anim. Nulla
            aliqua sit ex eu. Quis laborum esse incididunt esse ex eu aute
            ullamco ut. Consequat dolore aute ullamco qui qui aute enim. Ut
            eiusmod aute laboris sunt occaecat elit eu elit. Ipsum laborum
            mollit et in aliqua ullamco incididunt amet nulla pariatur occaecat
            ullamco sunt labore.
          </p>
        </div>
      </section>
    </>
  );
}

export default Reason;
