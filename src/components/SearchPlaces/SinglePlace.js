import React from "react";
import classes from "./ShowPlaces.module.css";

function SinglePlace({ ...place }) {
  return (
    <>
      <li className={classes["place_card_item"]}>
        <section>
          <h2>{place.poi.name}</h2>
          <p>{place.address.municipalitySubdivision}</p>
          <h2>Category</h2>
          {place.poi.categories.map((cat) => (
            <p>{cat}</p>
          ))}
        </section>

        <section>
          <h3>Position</h3>
          <p>Latitude: {place.position.lat}</p>
          <p>longitude: {place.position.lon}</p>
        </section>
      </li>
    </>
  );
}

export default SinglePlace;
