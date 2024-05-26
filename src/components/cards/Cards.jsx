import { useSearchContext } from "../../context/SearchContextProvider";
import { useTabContext } from "../../context/TabContextProvider";
import useResources from "../../hooks/useResources";
import Card from "./Card";

const Cards = () => {
  const { isLoading, resources } = useResources();
  const { query } = useSearchContext();
  const { currentTab } = useTabContext();

  const filterCards = (ele) => {
    const word = ele["title"].toLowerCase().replace(" ", "");
    const to_search = query.toLowerCase().replace(" ", "");
    if (word.includes(to_search)) {
      if (currentTab != "Resources") {
        const category = currentTab.toLowerCase().slice(0, -1);
        return ele["tag"] === category;
      } else return true;
    } else return false;
  };

  return (
    <div className="w-3/4 m-auto my-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {!isLoading
        ? resources
            .filter(filterCards)
            .map((ele, index) => (
              <Card
                card={ele}
                key={ele.id * Math.random() * 10}
                index={index}
              />
            ))
        : [...Array(9)].map(() => (
            <div className=" skeleton w-full h-36"></div>
          ))}
    </div>
  );
};

export default Cards;
