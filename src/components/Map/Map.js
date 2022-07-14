import React, { useEffect, useState, useRef } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as ttapi from "@tomtom-international/web-sdk-services";

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

  //convert cordinates to point
  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng,
      },
    };
  };

  //sketch route
  const drawRoute = (geoJson, map) => {
    if (map.getLayer("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: geoJson,
      },
      paint: {
        "line-color": "#FEA233",
        "line-width": 6,
      },
    });
  };

  //addDeliveryMarker
  const addDeliveryMarker = (lngLat, map) => {
    const element = document.createElement("div");
    element.className = `${classes["delivery_marker"]}`;

    new tt.Marker({
      element: element,
    })
      .setLngLat(lngLat)
      .addTo(map);
  };

  useEffect(() => {
    const destinations = [];
    const origin = {
      lng: mapLong,
      lat: mapLat,
    };

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

    const addMarker = () => {
      const marker = new tt.Marker({
        draggable: true,
      })
        .setLngLat([mapLong, mapLat])
        .addTo(map);

      //DragMarker
      const onDragEnd = () => {
        const lngLat = marker.getLngLat();
        setMapLong(lngLat.lng);
        setMapLat(lngLat.lat);
      };
      marker.on("dragend", onDragEnd);
    };
    addMarker();

    //getAlldestinations
    const sortDestinations = (locations) => {
      const pointsForDestinations = locations.map((destination) => {
        return convertToPoints(destination);
      });
      const callParameters = {
        key: process.env.REACT_APP_KEY,
        destinations: pointsForDestinations,
        origins: [convertToPoints(origin)],
      };

      return new Promise((resolve, reject) => {
        ttapi.services.matrixRouting(callParameters).then((matrixResult) => {
          const matrixResponses = matrixResult.matrix[0];

          //return location and drivingTime
          const locDrivingTimeArray = matrixResponses.map(
            (matrixResponse, index) => {
              return {
                location: locations[index],
                drivingtime:
                  matrixResponse.response.routeSummary.travelTimeInSeconds,
              };
            }
          );
          //sort by driving time  in ascending order
          locDrivingTimeArray.sort((a, b) => {
            return a.drivingtime - b.drivingtime;
          });

          //sort by location
          const sortedLocations = locDrivingTimeArray.map((locDrivingTime) => {
            return locDrivingTime.location;
          });

          resolve(sortedLocations);
        });
      });
    };

    //recalcullate route
    const recalculateRoutes = () => {
      sortDestinations(destinations).then((sorted) => {
        sorted.unshift(origin);

        ttapi.services
          .calculateRoute({
            key: process.env.REACT_APP_KEY,
            locations: sorted,
          })
          .then((routeData) => {
            const geoJson = routeData.toGeoJson();
            drawRoute(geoJson, map);
          });
      });
    };
    //add destinations
    map.on("click", (e) => {
      console.log("lat", e.lngLat);
      destinations.push(e.lngLat);
      console.log("pushed", destinations);
      addDeliveryMarker(e.lngLat, map);
      recalculateRoutes();
    });

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
