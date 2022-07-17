import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowPlaces from "./ShowPlaces";
import classes from "./ShowPlaces.module.css";

function SearchPlaces() {
  const [geoLocation, setGeoLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [enteredPlace, setEnteredPlace] = useState("");
  const [placeResult, setplaceResult] = useState([]);
  const apiKey = process.env.REACT_APP_KEY;

  //fetch nearbyplaces from tomtom api
  async function getNearbyPlaces(
    enteredPlace,
    lat,
    long,
    limit = 5,
    radius = 10000
  ) {
    let baseUrl = "https://api.tomtom.com/search/2/poiSearch";
    let queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=${apiKey}`;
    try {
      const response = await axios.get(
        `${baseUrl}/${enteredPlace}.json?${queryString}`
      );
      console.log("test", response.data.results);
      setplaceResult([...response.data.results]);
    } catch (error) {
      console.log(error);
      // setErrorMsg({ ...error });
    }
  }

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    await getNearbyPlaces(
      enteredPlace,
      geoLocation.latitude,
      geoLocation.longitude
    );
    setEnteredPlace("");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (e) => {
        setGeoLocation((prevState) => ({
          ...prevState,
          latitude: e.coords.latitude,
          longitude: e.coords.longitude,
        }));
      },
      async (err) => {
        setErrorMsg(err);
      }
    );
    // getNearbyPlaces(enteredPlace, geoLocation.latitude, geoLocation.longitude);
  }, [enteredPlace]);

  return (
    <>
      <section className={classes["places_container"]}>
        <h1>Search for Places of Interest</h1>
        <div>
          {errorMsg ? (
            <p>{errorMsg}</p>
          ) : (
            <section className={classes["position"]}>
              <h2>Your Current Position</h2>
              <div className={classes["position_coords"]}>
                <p>
                  <span>Lat:</span>
                  {geoLocation.latitude}
                </p>
                <p>
                  <span>Long:</span>
                  {geoLocation.longitude}
                </p>
              </div>
            </section>
          )}
        </div>
        <section className={classes["form_container"]}>
          <form onSubmit={(e) => handleFormSubmission(e)}>
            <input
              type="text"
              value={enteredPlace}
              onChange={(e) => setEnteredPlace(e.target.value)}
              className={classes["form_input"]}
              autoFocus
              placeholder="Enter place of interest"
            />
          </form>
        </section>
        <ShowPlaces placeResult={placeResult} />
      </section>
    </>
  );
}

export default SearchPlaces;
