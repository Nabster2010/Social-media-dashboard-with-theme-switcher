import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const ToggleTheme = () => {
  const [value, setValue] = useDarkMode();
  const toggleTheme = (e) => {
    setValue(!value);
  };

  return (
    <label
      htmlFor="default-toggle"
      className=" relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        onChange={toggleTheme}
        value={value}
        checked={value}
        id="default-toggle"
        className="sr-only peer"
      />
      <div className="w-11 h-[22px] bg-Toggle peer-checked:bg-gradient-to-r peer-checked:from-ToggleFrom peer-checked:to-ToggleTo   peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-[20px]  after:content-[''] after:absolute after:top-[3px] after:left-[4px] after:bg-white dark:after:bg-VeryDarkBlue   after:rounded-full after:h-4 after:w-4 after:transition-all "></div>
    </label>
  );
};

export default ToggleTheme;
