import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 z-10">
      <div className="bg-white px-8 py-4 flex item-center">
        <a href="#top" className="text-xl">
          Portfolio
        </a>
        <nav className="my-auto ml-auto">
          <ul className="flex">
            <li className="mx-4">
              <a href="#top">Top</a>
            </li>
            <li>｜</li>
            <li className="mx-4">
              <a href="#work">Work</a>
            </li>
            <li>｜</li>
            <li className="mx-4">
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-gradient-to-b from-white to-transparent h-8" />
    </header>
  );
};

export default Header;
