import { useEffect, useState } from "react";
import { Food_Carousel, Item_Carousel, Res_Carousel } from "../config";
// import { CORS_PROXY_URL } from "../config";
const useResData = (API_URL) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [carousel, setCarousel] = useState([]);
  const [resCarousel, setResCarousel] = useState([]);
  const [itemCarousel, setItemCarousel] = useState([]);

  
  useEffect(() => { 
    getRestaurants();
  }, []);

  
  async function getRestaurants() {  
   
    try {
      const data = await fetch(API_URL);
     
      if (!data.ok) {
        const err = data.status;
        throw new Error(err);
      } else {
        const json = await data.json();

        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {

            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;


            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

    
        const resData = await checkJsonData(json);

        setAllRestaurants(resData);
        setFilteredRestaurants(resData);

        setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards)
        setItemCarousel(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
        setResCarousel(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }

  return [allRestaurants, filteredRestaurants, carousel, itemCarousel, resCarousel]; 
};

export default useResData;