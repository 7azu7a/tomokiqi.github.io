import React from "react";
import { Work } from "../Work";

interface WorkDetailProps {
  work: Work;
  thumbnail: string;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkDetail: React.FC<WorkDetailProps> = (props) => {
  const { name, description, tags } = props.work;
  const thumbnail = props.thumbnail;
  return (
    <React.Fragment>
      <div className="fixed disable z-30 w-full h-full top-0 left-0 bg-gray-900 opacity-50"></div>
      <div className="max-w-md rounded shadow-md absolute top-50 left-50 z-50">
        <img className="w-full" src={thumbnail} alt="Work item" />
        <div className="px-8 py-4">
          {tags.map((tag, index) => {
            return (
              <span
                className="inline-block bg-gray-400 rounded-full px-4 text-sm mr-2 mb-2"
                key={index}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className="px-8 pb-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p>{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkDetail;
