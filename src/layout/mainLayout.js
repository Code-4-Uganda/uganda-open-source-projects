import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default MainLayout;
