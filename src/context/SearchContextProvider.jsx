import { useContext, createContext, useState } from "react";

const SearchContext = createContext();
export const useSearchContext = () => {
  return useContext(SearchContext);
};

const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const debounceQuery = () => {
    let timeoutId;
    return (value) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setQuery(value);
      }, 1000);
    };
  };
  const updateQuery = debounceQuery();
  return (
    <SearchContext.Provider value={{ query, updateQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
