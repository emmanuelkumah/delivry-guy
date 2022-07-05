import "./App.css";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Reason from "./components/Reasons/Reason";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Reason />
    </div>
  );
}

export default App;
