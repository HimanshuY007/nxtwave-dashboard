import { useState } from "react";
import useCreate from "../../hooks/useCreate";
import ChangePhoto from "./ChangePhoto";

const ResourceForm = () => {
  const [inputs, setInputs] = useState({
    username: "",
    link: "",
    description: "",
    image: "/placeholder.png",
  });
  const { isloading, createUser } = useCreate();
  const description_placeholder =
    "Ex. Building a new connectivity platform for the team";
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(inputs, setInputs);
  };
  return (
    <div className="md:w-1/2 w-2/3 m-auto flex flex-col">
      <h1 className="text-[32px] font-medium text-center text-[#171F46]">
        Add a Resource
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          <label className="text-[#7E858E] font-semibold text-sm">NAME</label>
          <input
            type="text"
            value={inputs.username}
            className="w-full px-4 py-2 mt-2 outline-none border border-[#D7DFE9] rounded bg-transparent"
            placeholder="John Doe"
            maxLength={25}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>
        <div className="mt-8">
          <label className="text-[#7E858E] font-semibold text-sm">LINK</label>
          <input
            type="text"
            value={inputs.link}
            className="w-full px-4 py-2 mt-2 outline-none border border-[#D7DFE9] rounded"
            placeholder="https://example.com"
            onChange={(e) => setInputs({ ...inputs, link: e.target.value })}
          />
        </div>
        <div className="mt-8">
          <label className="text-[#7E858E] font-semibold text-sm">
            DESCRIPTION
          </label>
          <textarea
            rows={3}
            value={inputs.description}
            className="w-full px-4 py-2 mt-2 outline-none border border-[#D7DFE9] rounded resize-none"
            placeholder={description_placeholder}
            maxLength={300}
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
          />
        </div>
        <ChangePhoto image={inputs.image} setImage={setInputs} />
        <div className="mt-8 text-center">
          {!isloading ? (
            <button className="px-4 py-2 text-white text-sm bg-[#0B69FF] rounded hover:scale-110 transition-all">
              CREATE
            </button>
          ) : (
            <span className="py-[14.5px] loading loading-spinner loading-md"></span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResourceForm;
