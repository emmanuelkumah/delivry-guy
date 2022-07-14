import React from "react";

const axios = require("axios").default;

function PlaceFinder({ geoLocation, setSearchResults }) {
  const apiKey = process.env.REACT_APP_KEY;

  //   async function getNearbyPlaces(query, lat, lng, limit = 5, radius = 10000) {
  //     let baseUrl = "https://api.tomtom.com/search/2/poiSearch";
  //     let queryString = `limit=${limit}&lat=${lat}&lon=${lng}&radius=${radius}&key=${apiKey}`;
  //     let response = await axios.get(`${baseUrl}/${query}.json?${queryString}`);
  //     return response.data.results;
  //   }

  //   async function onSearchChange(query) {
  //     if (query.length > 0) {
  //       let findPlace = new PlaceFinder(apiKey);
  //       let results = await findPlace.getNearbyPlaces(
  //         query,
  //         geoLocation.latitude,
  //         geoLocation.longitude
  //       );
  //       setSearchResults({
  //         results,
  //       });
  //     }
  //   }
  /*
    async onSearchChange(query) {
  if (query.length > 0) {
    let placeFinder = new PlaceFinder('YOUR_API_KEY');
    let results = (await placeFinder.getNearbyPlaces(query, this.state.geoLocation.latitude, this.state.geoLocation.longitude));
    this.setState({
      searchResults: results
    });
  }
}

render() {
  return (
    <div>
      <Banner
        geoLocation={this.state.geoLocation}
        geoError={this.state.geoError}
      />

      <ReactSearchBox
        placeholder="Search for nearby places"
        matchedRecords={this.state.searchResults
          .map(result => ({
            key: result.id,
            name: result.poi.name,
            dist: result.dist,
            value: `${result.poi.name} | ${(result.dist / 1000).toFixed(2)}km `
          }))
          .sort((a, b) => a.dist - b.dist)
        }
        data={this.state.searchResults
          .map(result => ({
            key: result.id,
            name: result.poi.name,
            dist: result.dist,
            value: result.poi.name
          }))
          .sort((a, b) => a.dist - b.dist)
        }
        onSelect={(place) => console.log(place)}
        autoFocus={true}
        onChange={(query) => this.onSearchChange(query)}
        fuseConfigs={{
          minMatchCharLength: 0,
          threshold: 1,
          distance: 100000,
          sort: false
        }}
        keys = {['name']}
      />
    </div>
  );
}
     */
  return (
    <>
      <h1>Place finder</h1>
    </>
  );
}

export default PlaceFinder;
