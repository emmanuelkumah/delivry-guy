import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Map from "./components/Map/Map";
import SearchPlaces from "./components/SearchPlaces/SearchPlaces";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/places" element={<SearchPlaces />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
