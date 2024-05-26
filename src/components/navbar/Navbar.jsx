import { Link } from "react-router-dom";
import AddButton from "./AddButton";
import Profile from "./Profile";

const Navbar = ({ isHome }) => {
  return (
    <div className="px-10 py-5 flex justify-between items-center bg-white border-solid border-gray-400/80 border-b shadow-md shadow-gray-300/40">
      <Link to="/">
        <img src="/nxtwave_logo.svg" alt="Logo" width={82} />
      </Link>
      <div className=" flex justify-between items-center">
        {isHome ? (
          <Link to="/add_user">
            <AddButton />
          </Link>
        ) : (
          <></>
        )}
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
