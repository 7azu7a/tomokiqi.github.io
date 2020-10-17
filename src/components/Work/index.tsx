import React from "react";
import DummyPhoto from "./480x320.png";

interface Work {
  name: string;
  description: string;
  tags: string[];
}

interface WorkContentProps {
  work: Work;
}

const Work: React.FC = () => {
  const works = [
    {
      name: "部門勤怠管理サイト",
      description:
        "勤怠を管理するためのアプリです。 Google カレンダーと Slack にも連携しています。コロナによる在宅勤務で勤怠の連絡／報告手段が煩雑化したため開発し、利用社員からは面倒が解消されたと満足度90%以上の評価をもらいました。",
      tags: ["#Vue", "#GoogleAppScript", "#Vuetify"],
    },
    {
      name: "ポモドーロクロック",
      description:
        "集中時間を管理するためのアプリです。ポモドーロ・テクニックをタイマーではなく時計に応用しました。メディアが自動再生されない iOS のブラウザでも自動でチャイムが鳴る工夫が必要でした。",
      tags: ["#React", "#React Hooks"],
    },
    {
      name: "積読管理アプリ（仮）",
      description:
        "積読を管理するためのアプリです。開発中のため UI は暫定となります。一冊ではなく複数冊を並行して読むユーザーを想定しています。",
      tags: ["#React Native", "#Redux", "#React Hooks"],
    },
  ];

  const WorkContent: React.FC<WorkContentProps> = (props) => {
    const { name, description, tags } = props.work;
    return (
      <div className="max-w-md rounded shadow-md">
        <img className="w-full" src={DummyPhoto} alt="Work item" />
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
    );
  };
  return (
    <div id="work" className="flex pt-32 space-x-4 > *">
      {works.map((work: Work, index: number) => {
        return <WorkContent work={work} key={index} />;
      })}
    </div>
  );
};

export default Work;
