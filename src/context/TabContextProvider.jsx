import { createContext, useContext, useState } from "react";

const sections = ["Resources", "Requests", "Users"];
const TabContext = createContext();

export const useTabContext = () => {
  return useContext(TabContext);
};

const TabContextProvider = ({ children }) => {
  const [currentTab, setTab] = useState(sections[0]);
  return <TabContext.Provider value={{currentTab,setTab,sections}}>{children}</TabContext.Provider>;
};

export default TabContextProvider;
