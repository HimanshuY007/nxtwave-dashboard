import Navbar from "../components/navbar/Navbar";
import ResourceForm from "../components/resource_form/ResourceForm";
import Banner from "../components/resource_form/Banner";
import HomeButton from "../components/resource_form/HomeButton";
import { Link } from "react-router-dom";

const AddResource = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar isHome={false} />
      <div className="grow grid grid-cols-2">
        <div className="flex flex-col">
          <Link to="/">
            <HomeButton />
          </Link>
          <ResourceForm />
        </div>
        <Banner src="/banner.png" />
      </div>
    </div>
  );
};

export default AddResource;
