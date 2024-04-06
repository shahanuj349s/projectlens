import React from "react";
import Aboutus from "../components/About/Aboutus/Aboutus";
import Vision from "../components/About/Vision/Vision";
import Mission from "../components/About/Mission/Mission";
import Navbar1 from "../components/Navbar1/Navbar1";

function About() {
  return (
    <div>
      <Navbar1 />
      <div className="pt-4">
        <Aboutus />
        <Vision />
        <Mission />
      </div>
    </div>
  );
}

export default About;
