import { useState } from "react";
import { toast } from "react-toastify";

const isValid = (inputs) => {
  const { image, ...params } = inputs;
  let res = true;
  Object.keys(params).forEach((key) => {
    if (!params[key].length) {
      toast.error(`${key} is required`);
      res = false;
    }
  });
  let pattern = /^[a-zA-Z\s]+$/;
  if (params["username"].length && !pattern.test(params["username"])) {
    toast.error("username can only consist of alphabets");
    res = false;
  }
  return res;
};

const useCreate = () => {
  const default_user = {
    username: "",
    link: "",
    description: "",
    image: "/placeholder.png",
  };
  const [isloading, setLoading] = useState(false);

  const createUser = async (inputs, setInputs) => {
    const success = isValid(inputs);
    if (!success) {
      setInputs(default_user);
      return;
    }
    setLoading(true);
    const res = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json"
    );
    if (res.status === 200) {
      toast.success("User added successfully!");
    } else {
      toast.error("User cannot be added");
    }
    setInputs(default_user);
    setLoading(false);
  };
  return { isloading, createUser };
};

export default useCreate;
