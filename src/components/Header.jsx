import { useState } from "react";
import { logo_Url } from "../util/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-white shadow-md sticky top-0 z-10 px-6 py-4">
      <div className="flex items-center">
        <img className="w-12 h-12 rounded-lg" src={logo_Url} alt="Food Delivery Logo" />
        <span className="ml-3 text-xl font-bold text-orange-600">FoodieExpress</span>
      </div>

      <div>
        <ul className="flex items-center space-x-8">
          <li className="flex items-center">
            <span className="text-sm font-medium text-gray-600 mr-2">Status:</span>
            {onlineStatus ? (
              <span className="flex items-center text-green-600 text-sm font-medium">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span>
                Online
              </span>
            ) : (
              <span className="flex items-center text-red-600 text-sm font-medium">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-1"></span>
                Offline
              </span>
            )}
          </li>

          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-600 font-medium border-b-2 border-transparent hover:border-orange-600 transition-all duration-200 pb-1"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-600 font-medium border-b-2 border-transparent hover:border-orange-600 transition-all duration-200 pb-1"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-600 font-medium border-b-2 border-transparent hover:border-orange-600 transition-all duration-200 pb-1"
            >
              Contact
            </Link>
          </li>

          <li>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;