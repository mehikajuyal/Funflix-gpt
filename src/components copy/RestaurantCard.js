import { CDN_URL } from "../utils/constants";

const RestaurantContainer = (props) => {
  const { resObj } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resObj.info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <h2>{name}</h2>
      <h4>{costForTwo}</h4>
      <h4>
        {avgRating} star {deliveryTime} min
      </h4>
      {cuisines.join(", ")}
    </div>
  );
};

export default RestaurantContainer;
