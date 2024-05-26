import { IoSearchSharp } from "react-icons/io5";
import { useSearchContext } from "../../context/SearchContextProvider";
const SearchBar = () => {
  const { updateQuery } = useSearchContext();
  return (
    <div className="w-3/4 m-auto border border-[#D7DFE9] rounded bg-white">
      <form>
        <label className="flex items-center cursor-pointer">
          <div className="px-4 py-3 text-[#171F46]">
            <IoSearchSharp width={12} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="grow placeholder:text-[#7E858E/60] placeholder:font-extralight outline-none"
            onChange={(e) => updateQuery(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
