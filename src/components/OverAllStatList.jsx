import React from "react";
import OverAllCard from "./OverAllCard";

const OverAllStatList = ({ data }) => {
  return (
    <section className="card-wrapper -mt-24 ">
      {data.map((item) => (
        <OverAllCard item={item} key={item.src} />
      ))}
    </section>
  );
};

export default OverAllStatList;
