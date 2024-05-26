import Navbar from "../components/navbar/Navbar";
import Tabs from "../components/tabs/Tabs";
import SearchBar from "../components/search/SearchBar";
import Cards from "../components/cards/Cards";

const Home = () => {
  return (
    <div>
      <Navbar isHome={true} />
      <Tabs />
      <SearchBar />
      <Cards />
    </div>
  );
};

export default Home;
