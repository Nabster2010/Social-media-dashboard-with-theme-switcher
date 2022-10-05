import React from "react";

const OverAllCard = ({ item }) => {
  const { handle, statistic, statNo, count, src, up, platform } = item;

  return (
    <article className={`card-big card-big-${platform}`}>
      <div className="flex gap-2 ">
        <img className="w-6 h-6" src={src} alt="" />
        <span className="text-cardHeading font-bold text-DarkGrayishBlue dark:text-DesaturatedBlue">
          {handle}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">{statNo}</h1>
        <p className="uppercase text-cardHeading tracking-[0.3em] text-DarkGrayishBlue dark:text-DesaturatedBlue">
          {statistic}
        </p>
      </div>
      <div className="flex justify-center items-center gap-1">
        <img
          src={`${up ? "/images/icon-up.svg" : "/images/icon-down.svg"} `}
          alt=""
        />

        <p
          className={`text-xs font-bold ${
            up ? "text-LimeGreen" : "text-BrightRed"
          }  `}
        >
          {count} Today
        </p>
      </div>
    </article>
  );
};

export default OverAllCard;
