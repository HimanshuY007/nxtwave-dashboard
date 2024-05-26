import { FiPlus } from "react-icons/fi";

const AddButton = () => {
  return (
    <div className="px-4 py-2 flex justify-center items-center cursor-pointer rounded text-white bg-[#0B69FF] hover:scale-110 transition-all">
      <FiPlus width={16} />
      <span className="pl-2 text-sm/[14px]">ADD</span>
    </div>
  );
};

export default AddButton;
