import React from "react";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <header className="divide-y md:divide-none divide-DarkGrayishBlue dark:divide-DesaturatedBlue flex pb-32 p-6 md:px-24 pt-6  bg-VeryPaleBlue dark:bg-VeryDarkBlue2 flex-col md:flex-row md:items-center gap-5  md:justify-between   ">
      <div className="">
        <h1 className="text-2xl font-bold"> Social Media Dashboard</h1>
        <p className=" text-DarkGrayishBlue dark:text-DesaturatedBlue text-cardHeading font-bold ">
          Total Followers: 23,004
        </p>
      </div>
      <div className="flex pt-5 md-pt-0 gap-3 md:justify-center justify-between md:items-center ">
        <p className="text-DarkGrayishBlue dark:text-DesaturatedBlue text-cardHeading font-bold">
          Dark Mode
        </p>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
