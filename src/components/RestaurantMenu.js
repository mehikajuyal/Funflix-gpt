import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenuComponent = () => {
  const [restInfo, setrestInfo] = useState(null);
  const { restId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + restId);

    const json = await data.json();
    console.log(json);
    setrestInfo(json);
  };

  if (restInfo === null) return <Shimmer />;

  const { text } = restInfo?.data?.cards[0]?.card?.card;
  const { itemCards } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log({ text });
  console.log({ itemCards });

  return (
    <div className="menu-container">
      <h1>{text}</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenuComponent;
