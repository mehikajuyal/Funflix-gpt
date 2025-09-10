import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resObj.info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card w-62 mr-6 border border-black-50 mb-6 rounded-b-xl bg-gray-50 hover:bg-gray-200">
      <div className="res-logo p-3 ">
        <img
          className="h-60 w-full border rounded-xl"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <div className="px-3">
        <h2 className="py-4 font-bold">{name}</h2>
        <h4>{costForTwo}</h4>
        <h4>
          {avgRating} star {deliveryTime} min
        </h4>
        {cuisines.join(", ")}
      </div>
    </div>
  );
};

// High Order Functions

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Closed
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
