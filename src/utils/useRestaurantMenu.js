import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (restId) => {
  const [restInfo, setrestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + restId);

    const json = await data.json();
    console.log(json);
    setrestInfo(json.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
