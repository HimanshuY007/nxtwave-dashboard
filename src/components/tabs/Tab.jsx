const Tab = ({ type, isLast, toggleTab, currentTab }) => {
  return (
    <div
      className={`w-full text-sm font-semibold py-2.5 cursor-pointer transition-all duration-300 flex justify-center items-center border-[#D7DFE9] text-[#171F46] ${
        !isLast ? "border-r" : ""
      } ${currentTab === type ? "active-tab" : ""}`}
      onClick={toggleTab}
    >
      {type}
    </div>
  );
};

export default Tab;
