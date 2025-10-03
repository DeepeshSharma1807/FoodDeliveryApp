import Shimmer from "./shimmer.jsx";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../util/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  if (resInfo === null) return <Shimmer/>;
  const {name, cuisines, costForTwo} = resInfo?.cards?.[2]?.card?.card?.info;
  
  const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-gray-600 text-lg">{cuisines.join(", ")}</p>
        <p className="text-gray-700 font-medium mt-1">₹{costForTwo/100} for two</p>
        <div className="flex items-center mt-3">
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium mr-3">
            ⭐ 4.2
          </span>
          <span className="text-gray-600 text-sm">30-35 mins delivery</span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recommended ({itemCards.length} items)
        </h2>
        
        <div className="space-y-4">
          {itemCards.map((item) => (
            <div key={item?.card?.info?.id} className="flex justify-between items-start p-4 border-b border-gray-100 last:border-b-0">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  {item?.card?.info?.name}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item?.card?.info?.description}
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-24 h-20 bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">🍽️</span>
                </div>
                <button className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;