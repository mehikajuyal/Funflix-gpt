import RestaurantContainer from "./RestaurantCard";
import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [valueSearched, setvalueSearched] = useState("");
  const [filteredList, setfilteredList] = useState([]);

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
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // alternative way to solve cors proxy error - this will first make a proxy call then cors proxy will internally make a swiggy call.
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  if (!listOfRestaurant.length) return <Shimmer />;
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={valueSearched}
          onChange={(e) => {
            setvalueSearched(e.target.value);
          }}
        ></input>
        <button
          className="btn"
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
          className="btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((rest) => {
              return rest.info.avgRating > 4;
            });
            setfilteredList(filteredList);
          }}
        >
          Search top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList?.map((restaurant) => (
          <Link
            to={"restaurantmenu/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantContainer resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
