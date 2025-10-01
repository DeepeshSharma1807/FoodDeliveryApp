import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./shimmer.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9308107&lng=77.58385770000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="text-red-500 text-6xl mb-4">🔴</div>
        <h1 className="text-2xl font-bold text-gray-800">You are Offline!</h1>
        <p className="text-gray-600 mt-2">Please check your internet connection</p>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Delicious Food, Delivered Fast</h1>
        <p className="text-gray-600 text-lg">Discover the best restaurants near you</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex w-full md:w-auto">
            <input
              type="text"
              placeholder="Search for restaurants..."
              value={searchText}
              className="px-4 py-3 w-full md:w-80 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-200"
              onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter(
                  (restaurant) =>
                    restaurant.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating >= 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            ⭐ Top Rated
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.Promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
