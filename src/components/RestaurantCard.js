import { CDN_Url } from "../util/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          alt="restaurant"
          src={CDN_Url + cloudinaryImageId}
        />
        <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
          ⭐ {avgRating}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-1">{cuisines.join(", ")}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-800">{costForTwo}</span>
          <span className="text-xs text-gray-500">30-35 mins</span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;