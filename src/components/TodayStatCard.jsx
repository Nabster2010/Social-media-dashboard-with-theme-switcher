import React from "react";

const TodayStatCard = ({ item }) => {
  const { percent, number, stat, src, up } = item;

  return (
    <article
      className={`flex flex-col rounded-md  gap-6  p-6 bg-LightGrayishBlue dark:bg-DarkDesaturatedBlue  transition hover:bg-Toggle/40 dark:hover:bg-DarkGrayishBlue/40 cursor-pointer`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-DarkGrayishBlue dark:text-DesaturatedBlue text-[15px] font-bold">
          {stat}
        </h3>
        <img src={src} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">{number}</h1>

        <div className="flex justify-center items-center gap-1">
          <img
            src={up ? "/images/icon-up.svg" : "/images/icon-down.svg"}
            alt=""
          />
          <p
            className={`${
              up ? "text-LimeGreen " : "text-BrightRed"
            } text-cardHeading font-bold `}
          >
            {percent}%
          </p>
        </div>
      </div>
    </article>
  );
};

export default TodayStatCard;
