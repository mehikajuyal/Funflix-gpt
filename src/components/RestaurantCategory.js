import { useState } from "react";
import CategoryItemCard from "./CategoryItemCard";

const RestaurantCategory = (props) => {
  const { data, showItem, setexpandCategory } = props;
  const { title } = data;

  const handleCategoryClick = () => {
    setexpandCategory();
  };
  return (
    <div className="w-7/12 mx-auto bg-gray-100 shadow-m my-4 p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleCategoryClick}
      >
        <span className="font-bold text-xl">
          {title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {showItem && (
        <CategoryItemCard itemList={data.itemCards}></CategoryItemCard>
      )}
    </div>
  );
};

export default RestaurantCategory;
