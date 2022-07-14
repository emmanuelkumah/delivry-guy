import React, { useEffect, useState } from "react";
import Notification from "./Notification";

function SearchPlaces() {
  const [geoLocation, setGeoLocation] = useState({
    latitdue: "",
    longitude: "",
  });
  const [errorMsg, setErrorMsg] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (e) => {
        console.log("cords", e.coords);
        setGeoLocation((prevState) => {
          return {
            ...prevState,
            latitdue: e.coords.latitude,
            longitude: e.coords.longitude,
          };
        });
        //set errorMsg
      },
      async (err) => {
        setErrorMsg({ err });
      }
    );
  }, []);
  console.log("err", errorMsg);
  return (
    <>
      <h1>Place search</h1>

      <Notification geoLocation={geoLocation} errorMsg={errorMsg} />
    </>
  );
}

export default SearchPlaces;
