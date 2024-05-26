import { useEffect, useState } from "react";

const useResources = () => {
  const [isloading, setLoading] = useState(false);
  const [resources, setResources] = useState([]);
  useEffect(() => {
    const getResources = async () => {
      setLoading(true);
      const res = await fetch(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      );
      const data = await res.json();
      setResources(data);
      setLoading(false);
    };
    getResources();
  }, []);
  return { isloading, resources };
};

export default useResources;
