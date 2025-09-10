import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenuComponent = () => {
  const { restId } = useParams();
  const restInfo = useRestaurantMenu(restId);
  const [expandCategory, setexpandCategory] = useState(null);

  if (restInfo === null) return <Shimmer />;

  const { text } = restInfo?.cards[0]?.card?.card;
  // const { category } =
  const category =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.["card"]?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  //     ?.card;

  // const { category } = restInfo?.cards[1].card.card;

  // console.log({ text });
  console.log(category);

  return (
    <div className="text-center">
      <h1 className="font-bold mb-4">{text}</h1>
      {category.map((category, index) => (
        // Controlling function
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItem={index === expandCategory ? true : false}
          setexpandCategory={() =>
            setexpandCategory(index == expandCategory ? null : index)
          }
        ></RestaurantCategory>
      ))}
    </div>
  );
};

export default RestaurantMenuComponent;
