import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchPlaces() {
  const [geoLocation, setGeoLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [enteredPlace, setEnteredPlace] = useState("");
  //   const [searchResults, setSearchResults] = useState({});
  const apiKey = process.env.REACT_APP_KEY;

  //get nearby places

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
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

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
    getNearbyPlaces(enteredPlace, geoLocation.latitude, geoLocation.longitude);
  }, [enteredPlace]);

  return (
    <>
      <h1>Place search</h1>
      <div>
        {errorMsg ? (
          <p>{errorMsg}</p>
        ) : (
          <p>
            <span>{geoLocation.longitude}</span>
            <span>{geoLocation.latitude}</span>
          </p>
        )}
      </div>
      <section>
        <form onSubmit={getNearbyPlaces}>
          <input
            type="text"
            value={enteredPlace}
            onChange={(e) => setEnteredPlace(e.target.value)}
          />
          <p>{enteredPlace}</p>
          <button>Search Place</button>
        </form>
      </section>
    </>
  );
}

export default SearchPlaces;
