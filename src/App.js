import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Map from "./components/Map/Map";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Map />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
