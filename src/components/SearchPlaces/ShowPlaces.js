import React from "react";
import classes from "./ShowPlaces.module.css";
import SinglePlace from "./SinglePlace";
function ShowPlaces({ placeResult }) {
  const listPlaces = placeResult.map((place) => (
    <SinglePlace {...place} key={place.id} />
  ));
  return (
    <>
      <section>
        {placeResult.length > 1 && (
          <h2 className={classes["place_heading"]}>Found these places </h2>
        )}
        <ul className={classes["place_card"]}>{listPlaces}</ul>
      </section>
    </>
  );
}

export default ShowPlaces;
