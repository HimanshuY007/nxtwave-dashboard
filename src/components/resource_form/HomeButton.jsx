import { IoIosArrowBack } from "react-icons/io";

const HomeButton = () => {
  return (
    <div className="flex ml-9 mt-5 items-center cursor-pointer">
        <div className=""><IoIosArrowBack /></div>
        <p className="px-2 text-[#7E858E] text-sm hover:scale-110 transition-all">Users</p>
    </div>
  )
}

export default HomeButton