import React from "react";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Pricing from "../Pricing/Pricing";
import Reason from "../Reasons/Reason";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Reason />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;
