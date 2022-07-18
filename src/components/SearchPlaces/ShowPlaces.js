import React from "react";
import classes from "./ShowPlaces.module.css";
import SinglePlace from "./SinglePlace";
import { BiWinkSmile } from "react-icons/bi";

function ShowPlaces({ placeResult }) {
  const listPlaces = placeResult.map((place) => (
    <SinglePlace {...place} key={place.id} />
  ));
  return (
    <>
      <section>
        <h2 className={classes["place_heading"]}>
          Found these places{" "}
          <span>
            <BiWinkSmile />
          </span>
        </h2>

        <ul className={classes["place_card"]}>{listPlaces}</ul>
      </section>
    </>
  );
}

export default ShowPlaces;
