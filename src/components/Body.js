import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer.js";
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline";
import UserOffline from "./userOffline";
import FoodCarousel from "./Banner";
import ItemCarousel from "./ItemCarousel";
import ResCarousel from "./ResCarousel";
import ButtonList from "../LeftRight/ButtonList";
import { CORS_PROXY_URL } from "../config";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [carousel, setCarousel] = useState([]);
  const [resCarousel, setResCarousel] = useState([]);
  const [itemCarousel, setItemCarousel] = useState([]);
  const { lat, lng, address } = JSON.parse(localStorage.getItem("swgy_userLocation"));
  const city = address?.split(",")[0];

  
  useEffect(() => { 
    getRestaurants();
  }, []);

  
  async function getRestaurants() {  
   
    try {
      const res = await fetch(`${CORS_PROXY_URL}https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`)
        const {data} = await res.json()


        const [carousedata] = data?.cards?.filter(({ card: { card } }) => card?.id === "topical_banner")
        const [iteamcarousedata] = data?.cards?.filter(({ card: { card } }) => card?.header?.title === "What's on your mind?")
        const [restGridObj] = data?.cards?.filter(({ card: { card } }) => card?.id === "top_brands_for_you")
            
        setCarousel(carousedata?.card?.card?.imageGridCards);
        setItemCarousel(iteamcarousedata?.card?.card?.imageGridCards?.info);
        setAllRestaurants(restGridObj?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(restGridObj?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResCarousel(restGridObj?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    } catch (error) {
      console.error(error); 
    }
  }
    

    const isOnline = useOnline();
    if (!isOnline) {
      return <UserOffline />
    }
  
    if (!allRestaurants){
      <Shimmer/>
    }
  
    return  allRestaurants?.length === 0  ? (
      <Shimmer />
     ) :  (
      <>    
          <div className="body max-full mx-auto pt-[110px] pb-40">
            <div className='mx-7 sm:mx-14 md:mx-24 lg:mx-20 pb-4 '>
              {
                <FoodCarousel data={carousel} />
              }
            </div>

            <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-20 pb-4'>
              <ItemCarousel data={itemCarousel} />
            </div>

            <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-20 border-1 border-solid border-gray-300 my-8" />


            <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-20 p-4'>
              <h2 className='font-bold text-2xl pb-4'>Top restaurant chains in {city}</h2>
              <ResCarousel data={resCarousel} />
            </div>



            <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-20 border-1 border-solid border-gray-300 my-8" />


            <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-20 '>
              <h1 className='font-bold text-2xl pb-4'>Restaurants with online food delivery</h1>
              <div>
                <ButtonList/>
              </div>
              <div className="grid grid-cols-1 mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-8 mt-8" data-testid='res-list'>
                {(filteredRestaurants  || []).map(
                  (restaurant) => {
                    return (
                      <Link
                        to={"/restaurant/" + restaurant?.info?.id}
                        key={restaurant?.info?.id}
                      >
                        {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                        <RestaurantCard {...restaurant?.info} />
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        )
      </>
    );
  };
  
  export default Body;
