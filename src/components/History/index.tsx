import React from "react";

interface History {
  year: string;
  event: string;
  work: string;
}

interface LifeEventProps {
  history: History;
}

const History: React.FC = () => {
  const histories: History[] = [
    {
      year: "2011",
      event: "中央大学理工学部経営システム工学科入学",
      work:
        "心理学・サプライチェーン管理・金融工学・システム開発など経営およびITに関する基礎を習得。",
    },
    {
      year: "2015",
      event: "中央大学大学院理工学研究科経営システム工学専攻入学",
      work:
        "消費者心理を脳科学の見地から解明するニューロマーケティング分野の研究に従事。",
    },
    {
      year: "2017",
      event: "ソフトバンク株式会社入社・株式会社Agoop出向",
      work:
        "ネイティブアプリの企画・要件定義やアプリ搭載モジュールの開発マネジメント・QAを担当。",
    },
    {
      year: "2019",
      event: "ソフトバンク株式会社帰任",
      work:
        "データソリューション系Webアプリケーションの開発および医療系ネイティブアプリケーションの開発に従事。",
    },
  ];

  const LifeEvent: React.FC<LifeEventProps> = (props) => {
    const { year, event, work } = props.history;
    return (
      <div className="flex my-8">
        <div className="rounded-full border bg-gray-400 w-32 h-32 flex justify-center items-center">
          <div className="text-2xl">{year}</div>
        </div>
        <div className="ml-8 my-auto">
          <div className="font-bold text-xl">{event}</div>
          <div className="pt-2">
            <p>{work}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {histories.map((history: History, index: number) => {
        return <LifeEvent history={history} key={index} />;
      })}
    </div>
  );
};

export default History;
