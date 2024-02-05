import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import OurServices from "./components/OurServices";
import OurWork from "./components/OurWork";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-background">
        <Navbar />
        <Hero />
        <Stats />
        <OurServices />
        <OurWork />
        <Testimonial />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

export default App;
