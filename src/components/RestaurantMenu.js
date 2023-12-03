import { useParams } from "react-router-dom";
import { Img_Url } from "../config";
import { swiggy_menu_api_URL ,
    MenuItem_Img_Url,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
} from "../config";
import { MenuShimmer } from "./Shimmer";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import useOnline from "../utils/useOnline";
import UserOffline from "./userOffline";
import {FaRegStar} from "react-icons/fa";
import { addItem } from "../utils/cartSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {AiFillStar} from "react-icons/ai";
import { ResturantShimmer } from "./Shimmer";
import { BiCheckboxSquare, BiCaretUpSquare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {BsBoxArrowLeft} from "react-icons/bs";
import { FaClock } from"react-icons/fa"


const RestaurantMenu = ()=>{
    const params = useParams();
    const { resId } = params;

    const [restaurant, menuItems] = useRestaurantmenu(
        resId,
        swiggy_menu_api_URL,
        RESTAURANT_TYPE_KEY,

        MENU_ITEM_TYPE_KEY
    );

    const dispatch = useDispatch();
 
    const addHandler = (item) => {
        dispatch(addItem(item));
        toast.success(`${item?.name} added Successfully`);
    }
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
      };


    const isOnline = useOnline();
    if(!isOnline){
        return <UserOffline/>;
    }
    
    return (!restaurant) ? (
         <ResturantShimmer/>
         ) : (
            <div className="p-8 mt-8">
                
                <div className="bg-white px-6 py-4 mt-4 font-fsans shadow-lg shadow-slate-400 min-h-[500px] rounded-lg">
                 <button onClick={handleGoBack}><BsBoxArrowLeft size={30}/></button>
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center text-white bg-[#1B1B1B] p-8 rounded-md">
                        <div className="md:ml-8 mt-6 md:mt-0">
                            <h1 className="m-1 sm:m-3 text-xl sm:text-2xl font-semibold">
                                {restaurant?.name}
                            </h1>

                            <h3 className="m-1 sm:m-3 text-base sm:text-lg font-medium">
                                {restaurant?.cuisines.join(", ")}
                            </h3>

                            <h3 className="m-1 sm:m-3 text-base sm:text-lg">
                                {restaurant?.areaName}, {restaurant?.city}
                            </h3>

                            <h4 className="m-1 sm:m-3 text-base sm:text-xl font-medium">
                                {restaurant?.costForTwoMessage}
                            </h4>
                            <div className={`flex  flex-col items-center my-2 sm:my-6 mx-1 sm:mx-3  w-fit px-2 text-sm sm:text-lg font-bold ${
                                    +restaurant?.avgRating >= 4 ? "bg-[#48c479]" : "bg-[#f00e0e]"
                                } text-white`}>
                                <p
                                className="border-b w-full flex justify-center"
                                >

                                <span className="align-baseline">
                                    <AiFillStar className="inline"/>
                                </span>

                                <span className="align-baseline pl-1">{restaurant?.avgRating}</span>
                                </p>
                                <p className="align-baseline pl-1 text-black">{restaurant?.totalRatingsString}</p>
                            </div>
                        </div>
                        <div className="">
                            <img
                            className="md:ml-4 w-[400px] rounded-sm"
                            src={Img_Url + restaurant?.cloudinaryImageId}
                            alt="resturant-image"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between px-8 border-b">
                        <h1 className="mt-10  text-2xl font-bold text-gray-700">
                            All menu items
                        </h1>
                        <h1 className="mt-10  text-2xl font-bold text-gray-700 ">
                            Total <span className="text-orange-600">{menuItems.length}</span> Items
                        </h1>
                    </div>
                    <div
                        data-testid="menu"
                        className="flex justify-center lg:justify-start items-center flex-wrap mt-4"
                    >
                      {menuItems.map((item) => (
                            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center m-4  lg:m-6 w-[350px] lg:w-[400px] xl:w-[420px] border rounded-md p-4 border-gray-300  hover:shadow-xl  hover:border-none ease-in-out duration-300 overflow-hidden" key={item?.id}>
                                <div className="flex flex-col gap-0 mb-0">
                                    <div className="flex flex-row h-[130px] justify-between mt-0">
                                        <div className="mt-4 sm:mt-0 w-full sm:w-fit ">
                                        
                                            <div className="flex flex-row">
                                                <h4 className="m-1 text-sm font-bold text-black line-clamp-1">
                                                    {item?.name}
                                                </h4>
                                                <h6 className="font-semibold">
                                                    {item?.isVeg == 1 ? (
                                                    <BiCheckboxSquare className="text-green-700 text-2xl inline" />
                                                    ) : (
                                                    <BiCaretUpSquare className="text-red-700 text-lg ml-1 inline" />
                                                    )}
                                                </h6>
                                            </div>
                                            <h5 className="m-1 text-sm font-medium text-gray-700">
                                                {item?.category}
                                            </h5>
                                            <h6 className="m-1 text-sm font-medium text-gray-700">
                                                InStock - {item?.inStock == 1 ? "Yes" : "No"}
                                            </h6>
                                            <h6 className="mx-1 my-2 text-base font-bold">
                                                {item?.price > 0 ? new Intl.NumberFormat("en-In", {
                                                        style : "currency",
                                                        currency : "Inr",
                                                    }).format(item?.price/100) 
                                                    : " "
                                                }
                                            </h6>
                                            
                                        </div>
                                        <div className="flex flex-col w-full sm:w-[140px] h-[130px] relative overflow-hidden">
                                            <img
                                                className="shadow-md shadow-slate-500 bg-cover rounded-sm overflow-hidden"
                                                src={Img_Url + item?.imageId}
                                                alt="menu-item-img"
                                            />
                                            <button
                                                data-testid="addbtn"
                                                className="bg-[#c26100] py-2 px-4 mx-auto mt-3 sm:mt-6 text-sm text-white font-bold rounded-md hover:scale-x-110 overflow-hidden"
                                                onClick={() => addHandler(item)}
                                                style={{ position: "relative", top: "-40px" }}
                                            >
                                                ADD +
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-0">
                                        <p className=" text-sm text-[#282c3f73] max-w-[750px] line-clamp-1">{item?.description}</p>
                                    </div>
                                </div>
                            </div>    
                        ))}
                        
                    </div>
                </div>
            </div>

    
    );
};
export default RestaurantMenu;



