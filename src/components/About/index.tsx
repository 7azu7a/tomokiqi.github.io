import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Photo from "./photo.jpg";
import History from "../History";

const About = () => {
  return (
    <React.Fragment>
      <div className="pt-32 flex" id="about">
        <div>
          <img src={Photo} className="w-32 rounded-full" />
        </div>
        <div className="ml-8 my-auto">
          <div className="font-bold text-xl">Tomoki Saijo</div>
          <div className="pt-2">
            <p>1992年、神奈川県出身、東京都在住。フロントエンドエンジニア。</p>
          </div>
          <div className="flex pt-8">
            <a href="https://twitter.com/osteriatomos">
              <FaTwitter size="1.5em" />
            </a>
            <a href="https://github.com/osteriatomos">
              <FaGithub size="1.5em" className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <History />
    </React.Fragment>
  );
};

export default About;
