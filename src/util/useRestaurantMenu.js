import React from 'react';
import { useEffect , useState} from "react";
import { MENU_API } from "../util/constants.js";
import mockMenuData from "./mockMenuData.js";

const useRestaurantMenu = (resId) => {
    const [resInfo , setResInfo] = useState(null);
  
    useEffect(()=>{
    fetchMenu();
   },[])

   const fetchMenu = async () => {
    // Using mock menu data instead of API call to avoid CORS issues
    const mockData = mockMenuData[resId] || mockMenuData["default"];
    setResInfo(mockData);

    // Commented out API call - requires CORS extension for local development
    /*
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    */
   };
  return resInfo;
}

export default useRestaurantMenu
