import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full px-8 fixed top-0 text-gray-800">
      <div className="bg-white py-4 flex item-center">
        <span className="text-xl">Portfolio</span>
        <nav className="my-auto ml-auto">
          <ul className="flex">
            <li className="mx-4">
              <a href="">About</a>
            </li>
            <li>｜</li>
            <li className="mx-4">
              <a href="">Product</a>
            </li>
            <li>｜</li>
            <li className="mx-4">
              <a href="">Carrier</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-gradient-to-b from-white to-transparent h-8" />
    </header>
  );
};

export default Header;
