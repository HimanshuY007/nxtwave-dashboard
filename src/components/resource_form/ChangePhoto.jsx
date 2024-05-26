import { useRef, useState } from "react";
import { TbUpload } from "react-icons/tb";
import {toast} from "react-toastify";

const ChangePhoto = ({ image, setImage }) => {
  const [isLoading, setLoading] = useState(false);
  const inputRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handlePhoto = (event) => {
    const file = event.target.files[0];
    if (file.size > 2000000) {
      toast.error("File cannot be more than 2MB");
      inputRef.current.value = null;
      return;
    }
    const reader = new FileReader();
    reader.onloadstart = () => {
      setLoading(true);
    };
    reader.onloadend = () => {
      const image = reader.result;
      setLoading(false);
      setImage((prev) => ({ ...prev, image }));
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="mt-8 flex">
      <div className="p-2 border-2 border-[#D7DFE9] rounded bg-white">
        <img src={image} alt="Uploaded Image" className="size-5 rounded" />
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handlePhoto}
      />
      {!isLoading ? (
        <div
          className="flex items-center text-[#7E858E] cursor-pointer"
          onClick={handleClick}
        >
          <div className="text-lg px-1">
            <TbUpload />
          </div>
          <p className="text-sm font-light">Change photo</p>
        </div>
      ) : (
        <span className="mx-1 loading loading-spinner loading-sm text-[#7E858E]" />
      )}
    </div>
  );
};

export default ChangePhoto;
