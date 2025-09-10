import { CDN_URL } from "../utils/constants";
import { addItem } from "./../utils/Store/cartSlice"
import { useDispatch } from "react-redux";

const CategoryItemCard = (props) => {
  const { itemList } = props;
  console.log("item?&&", itemList);
  //   const { info } = data.card;

  const dispatch = useDispatch();

  const handleAddClick = (item) => {
     dispatch(addItem(item));
  }

  return (
    <div>
      {itemList?.map((item, ind) => {
        return (
          <div
            key={item?.card?.info?.id + ind}
            className="text-left flex justify-between mt-4 pb-4 border-b-1 border-gray-400"
          >
            <div className="w-9/12">
              <h2 className="font-bold mt-2">{item?.card?.info?.name}</h2>
              <h3 className="font-bold">
                ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </h3>
              <h3 className="py-3">
                <span className="text-red-800 text-xl">☆ </span>
                {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </h3>
              <p className="text-sm">{item?.card?.info?.description}</p>
            </div>
            <div className="m-auto">
              <span className="absolute  bg-black text-white p-2">
                <button className="rounded-lg shadow-lg" onClick={() => handleAddClick(item)}>Add +</button>
              </span>
              <img
                className="h-40 w-40"
                src={CDN_URL + item?.card?.info?.imageId}
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItemCard;
