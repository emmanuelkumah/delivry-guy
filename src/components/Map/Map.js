import React, { useEffect, useState, useRef } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import classes from "./Map.module.css";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

function Map() {
  const [map, setMap] = useState({});
  const [mapLat, setMapLat] = useState(5.630241);
  const [mapLong, setMapLong] = useState(-0.234297);
  const [mapZoom, setMapZoom] = useState(14);
  const [isInvalidLatCords, setIsInvalidLatCords] = useState(false);
  const [isInvalidLongCords, setIsInvalidLongCords] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const mapElemRef = useRef();
  const MAX_ZOOM = 20;

  const updateLong = (e) => {
    const enteredLong = e.target.value;
    //validate longitude
    /[a-z]/.test(enteredLong)
      ? setIsInvalidLatCords(/[a-z]/.test(enteredLong))
      : setMapLong(enteredLong);
  };

  const updateLat = (e) => {
    const enteredLat = e.target.value;
    //validate latitude
    /[a-z]/.test(enteredLat)
      ? setIsInvalidLongCords(/[a-z]/.test(enteredLat))
      : setMapLat(enteredLat);
  };

  //inceaseZoom
  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(mapZoom + 1);
    }
  };

  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
  };
  //handleMap Update
  const updateMap = (e) => {
    e.preventDefault();
    map.setCenter([parseFloat(mapLong), parseFloat(mapLat)]);
    map.setZoom(mapZoom);
  };

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_KEY,
      container: mapElemRef.current,
      center: [mapLong, mapLat],
      zoom: mapZoom,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
    });
    setMap(map);

    const addMarkers = () => {
      //showPop
      const popupOffset = {
        bottom: [0, -25],
      };

      const popup = new tt.Popup({ offset: popupOffset }).setHTML("info");

      //showMarker
      let marker = new tt.Marker({
        draggable: true,
      })
        .setLngLat([mapLong, mapLat])
        .addTo(map);

      //DragMarker
      const onDragEnd = () => {
        const lngLat = marker.getLngLat();
        console.log("dragging", lngLat);
        setMapLong(lngLat.lng);
        setMapLat(lngLat.lat);
      };
      marker.on("dragend", onDragEnd);

      marker.setPopup(popup).togglePopup();
    };
    addMarkers();

    return () => map.remove();
  }, [mapLat, mapLong, mapZoom]);

  return (
    <>
      <div className={classes["map_container"]}>
        <section className={classes["map_form"]}>
          <h1>Where to ? </h1>
          <form onSubmit={updateMap}>
            <div className={classes["form_input"]}>
              <label htmlFor="longitude">Longitude</label>
              <input
                type="text"
                name="longitude"
                placeholder="Enter Longitude"
                value={mapLong}
                onChange={updateLong}
              />
              {isInvalidLatCords && (
                <p className={classes["error_msg"]}>
                  Please enter an all digits characters
                </p>
              )}
            </div>
            <div className={classes["form_input"]}>
              <label htmlFor="latitude">Latitude</label>
              <input
                type="text"
                name="latitude"
                placeholder="Enter Latitude"
                value={mapLat}
                onChange={updateLat}
              />
              {isInvalidLongCords && (
                <p className={classes["error_msg"]}>
                  Please enter an all digits characters
                </p>
              )}
            </div>
            <section className={classes["map_zoom"]}>
              <h2>Zoom Map</h2>
              <div className={classes["icon_container"]}>
                <AiOutlinePlusSquare
                  className={classes["map_icon"]}
                  onClick={increaseZoom}
                />
                <span> {mapZoom}</span>

                <AiOutlineMinusSquare
                  className={classes["map_icon"]}
                  onClick={decreaseZoom}
                />
              </div>
            </section>
            <button className={classes["map_btn"]}>Update Map</button>
          </form>
        </section>
        {map ? (
          <section>
            <div ref={mapElemRef} className={classes.map} id="map" />
          </section>
        ) : (
          <h1>Loading </h1>
        )}
      </div>
    </>
  );
}

export default Map;
