import { useLoginContext } from "../../context/LoginContextProvider";

const Profile = () => {
  const { setLogin } = useLoginContext();
  const handleClick = () => {
    setLogin(false);
  };
  return (
    <div className="ml-4 cursor-pointer hover:scale-110 transition-all" onClick={handleClick}>
      <img src="https://avatar.iran.liara.run/public/" alt="" width={40} />
    </div>
  );
};

export default Profile;
