import React from "react";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Work from "../../components/Work";
import About from "../../components/About";
import Footer from "../../components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col h-screen justify-between font-serif text-gray-700">
      <Header />
      <main>
        <div className="px-8">
          <Intro />
          <Work />
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Root;
