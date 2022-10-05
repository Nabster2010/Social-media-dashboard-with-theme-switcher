import React from "react";
import TodayStatCard from "./TodayStatCard";
const TodayStatList = ({ data }) => {
  return (
    <section className="my-12 ">
      <h1 className="text-[20px] text-DarkGrayishBlue dark:text-White font-bold ">
        Overview - Today
      </h1>
      <div className="mt-8 card-wrapper">
        {data.map((item, i) => (
          <TodayStatCard item={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default TodayStatList;
