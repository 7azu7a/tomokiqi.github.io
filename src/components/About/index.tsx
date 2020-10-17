import React from "react";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import Photo from "./photo.jpg";

const About = () => {
  return (
    <div className="flex">
      <div>
        <img src={Photo} className="w-48 rounded-full" />
      </div>
      <div className="ml-8">
        <div className="text-xl text-gray-800">Tomoki Saijo</div>
        <div className="text-gray-500 pt-2">
          <p>1992年、神奈川県出身、東京在住。フロントエンドエンジニア。</p>
        </div>
        <div className="flex pt-2">
          <FaGithubSquare size="1.5em" className="text-gray-800" />
          <FaTwitterSquare size="1.5em" className="text-gray-800 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default About;
