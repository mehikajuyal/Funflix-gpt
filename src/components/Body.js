import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [valueSearched, setvalueSearched] = useState("");
  const [filteredList, setfilteredList] = useState([]);
  const {loggedInUser, setUserName} = useContext(UserContext)

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // - IF NO DEPENDENCY ARRAY - use effect is called on every component render.
  //   useEffect(() => {
  //     fetchData();
  //   });
  // - When depency array - use effect is called only on initial render. It will not called again when any use sate element is called.
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  // - When we put something inthe dependency - then use effect is called everytime the dependency is changed.
  //   useEffect(() => {
  //     fetchData();
  //   }, [valueSearched]);

  useEffect(() => {
    fetchData();
    // const timer = setInterval(() => {
    //   console.log("Set Interval");
    // }, 1000);

    // This return function inside useEffect is to clear everything on component destroy, like we have ngDestroy in angular
    return () => {
      // clearInterval(timer);
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // alternative way to solve cors proxy error - this will first make a proxy call then cors proxy will internally make a swiggy call.
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // Converting data to JSON

    const json = await data.json();
    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h2>
        Looks like you are offline!! Please check your internet connection.
      </h2>
    );

  if (!listOfRestaurant?.length) return <Shimmer />;
  return (
    <div className="body mx-5">
      <div className="search mb-14">
        <input
          type="text"
          className="border border-gray-500 rounded px-3 mr-1"
          value={valueSearched}
          onChange={(e) => {
            setvalueSearched(e.target.value);
          }}
        ></input>
        <button
          className="bg-green-500 border border-white-100 px-3 mr-4 cursor-pointer text-white p-1"
          onClick={() => {
            console.log(listOfRestaurant);
            console.log(valueSearched);
            const filteredlist = listOfRestaurant.filter((rest) => {
              return rest.info.name
                .toLowerCase()
                .includes(valueSearched.toLowerCase());
            });
            setfilteredList(filteredlist);
          }}
        >
          Search
        </button>
        <button
          className="bg-white-400 px-3 border border-black-200 cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((rest) => {
              return rest.info.avgRating > 4;
            });
            setfilteredList(filteredList);
          }}
        >
          Search top rated restaurants
        </button>

<input className="border-2 border-black m-2 px-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}>

</input>






      </div>
      <div className="res-container flex flex-wrap">
        {filteredList?.map((restaurant) => (
          <Link
            to={"restaurantmenu/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {" "}
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted
                resObj={restaurant}
              ></RestaurantCardPromoted>
            ) : (
              <RestaurantCard resObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
