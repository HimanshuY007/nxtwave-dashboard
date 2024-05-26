import { useState } from "react";
import Tab from "./Tab";
import { useTabContext } from "../../context/TabContextProvider";

const Tabs = () => {
  const { currentTab, setTab, sections } = useTabContext();
  const toggleTab = (e) => {
    setTab(e.target.innerText);
  };
  return (
    <div className="w-1/2 m-auto my-10 flex max-sm:flex-col bg-gray-100/60 rounded border-solid border-[#D7DFE9] border overflow-hidden">
      {sections.map((ele, i) => (
        <Tab
          key={i}
          type={ele}
          isLast={i === sections.length - 1}
          toggleTab={toggleTab}
          currentTab={currentTab}
        />
      ))}
    </div>
  );
};

export default Tabs;
