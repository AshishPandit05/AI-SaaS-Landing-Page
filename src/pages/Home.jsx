import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import { Features } from "tailwindcss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
};

export default Home;
