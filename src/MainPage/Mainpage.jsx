import React from "react";
import Navigation from "../Components/Navigation";
import Banner from "../Components/Banner";
import Menu from "../Components/Menu";
import Flavors from "../Components/Flavors";
import MustTry from "../Components/MustTry";
import Contact from "../Components/Contact";
import TopScroll from "../Components/TopScroll";

const Mainpage = () => {
  return (
    <div>
      {/* Navigation */}
      <Navigation />

      <TopScroll/>
      
      {/* Banner */}
      <section id="home">
        <Banner />
      </section>

      {/* Menu */}
      <section id="menu">
        <Menu />
      </section>
      
      {/* Flavors */}
      <section id="flavors">
        <Flavors/>
      </section>

      {/* Must Try */}
      <section id="musttry">
        <MustTry/>
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact/>
      </section>

      <TopScroll/>
    </div>
  );
};

export default Mainpage;
