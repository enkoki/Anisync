import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import AboutFeatures from "../components/AboutFeatures/AboutFeatures";
import AboutFooter from "../components/AboutFooter/AboutFooter";
import AboutIconsFeatures from "../components/AboutIconsFeatures/AboutIconsFeatures";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutFeatures />
      <AboutIconsFeatures />
      <AboutFooter />
    </>
  );
};

export default page;
