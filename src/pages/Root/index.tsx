import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Footer from "../../components/Footer";
import TopMessage from "../../components/TopMessage";

const Root = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main>
        <div className="px-8">
          <TopMessage />
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Root;
