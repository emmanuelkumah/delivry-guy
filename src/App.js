import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Reason from "./components/Reasons/Reason";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Reason />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
