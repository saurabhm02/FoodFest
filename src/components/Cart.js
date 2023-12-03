import { Img_Url } from "../config";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItems } from "../utils/cartSlice";
import { BiCheckboxSquare, BiCaretUpSquare } from "react-icons/bi";
import emptyCart from "../../assets/emptycart.png";
import { addItem, clearCart, clearRestaurant, computeTotal, removeItem } from "../utils/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartMenu = ({ item, cartItem }) => {
  const dispatch = useDispatch();
 
  const handleAdd = (item) => {
    dispatch(addItem(item));
    dispatch(computeTotal());
    toast.success(`${item?.name} added Successfully`);
  }

  const handleRemove = (item) => {
      if(cartItem.length === 1 && item?.itemCount === 1) {
          dispatch(clearRestaurant());
      } 
      dispatch(removeItem(item));
      dispatch(computeTotal());
      toast.error(`${item?.name} remove Successfully`);
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 border my-3 border-slate-300 rounded-md">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="w-[130px] md:mx-2 bg-contain shadow-md"
            src={Img_Url + item?.imageId}
            alt="food-image"
          />
          <div className="md:ml-8 text-base font-medium text-slate-700">
            <h2 className="text-xl font-semibold">{item?.name}</h2>
            <h6 className="font-semibold">
              Type :{" "}
              {item?.isVeg == 1 ? (
                <BiCheckboxSquare className="text-green-700 text-2xl inline" />
              ) : (
                <BiCaretUpSquare className="text-red-700 text-lg ml-1 inline" />
              )}
            </h6>
            <h6 className="inline font-semibold">
              InStock - {item?.inStock == 1 ? "Yes" : "No"}
            </h6>
            <h6 className="inline mx-4 font-semibold">
              Price &nbsp; ₹ {item?.price / 100}
            </h6>
          </div>
        </div>
        <div className="flex items-center ml-4">
          <div className="flex border items-center justify-center w-[70px] text-sm h-8 border-[#d4d5d9]">
              <span 
                  className="block text-center font-medium w-1/3 text-base cursor-pointer text-[#9a9ca3]"
                  onClick={() => handleRemove(item)}
              >
                  -
              </span>
              <span className="block text-center font-medium w-1/3 text-[#60b246] ">{item?.itemCount}</span>
              <span 
                  className="block text-center font-medium w-1/3 text-[#60b246] cursor-pointer text-base"
                  onClick={() => handleAdd(item)}
              >
                  +
              </span>
          </div>
          <div className="md:ml-5 text-[13px] text-[#606375] text-right w-[60px]">₹{parseFloat((item?.itemCount * (item?.price/100)).toFixed(2))}</div>
        </div>
    </div>
  );
};

const CartCheckout = ({ cartItem }) => {
  const price = [];
  return (
    <div className="px-10 py-4 my-10 md:col-span-2 border-l rounded-md">
      <h2 className="text-2xl font-sans font-bold mb-4 text-slate-700">
        {" "}
        Cart :{" "}
        <span className="text-orange-400 font-semibold">
          {cartItem.length} Items
        </span>
      </h2>
      {cartItem.map((item) => {
        return (
          <div
            className="flex justify-between px-1 mb-2 tracking-wide text-gray-600"
            key={item.id}
          >
            <h2>{item?.name}</h2>
            <h2>₹ {item?.price / 100}</h2>
          </div>
        );
      })}
      <div className="flex justify-between border-t-[1px] mt-2 py-2 text-lg font-semibold text-slate-700">
        <h2>SubTotal</h2>
        <h2>
          ₹ {price.reduce((partialSum, a) => partialSum + a, 0).toFixed(2)}
        </h2>
      </div>

      <button className="bg-[#d97919] py-2 px-4 my-3 text-white font-bold tracking-wider font-fsans w-full hover:shadow-md">
        CHECKOUT
      </button>
    </div>
  );
};

const Cart = () => {
  const navigate = useNavigate();
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.error("All-Items are removed");
  };

  return cartItem.length === 0 ? (
    <div className="min-h-[70vh] bg-slate-100 m-8 rounded-lg shadow-xl shadow-slate-300 py-8 px-6 flex justify-center items-center flex-col">
      <img className="w-[500px] bg-center" src={emptyCart} alt="empty-cart"></img>
      <h1 className="mt-4 text-slate-400">Good food is always cooking!</h1>
      <h1 className="text-slate-400">
        Go ahead, order some yummy items from the menu.
      </h1>
      <Link to={"/"}>
        <button className="uppercase bg-orange-500 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-orange-500 font-semibold hover:text-orange-700 p-3 px-10 tracking-wider">
          See Restaurants Near You
        </button>
      </Link>
    </div>
  ) : (
    <div className="min-h-[70vh] bg-slate-100 m-8 rounded-lg shadow-xl shadow-slate-300 py-20 px-6">
      <div className="flex justify-between mb-4 md:mb-8">
        <h1 className="font-bold text-3xl font-fsans text-gray-600 underline underline-offset-4">
          Total Cart Items : {cartItem.length}
        </h1>
        <div className="flex space-x-4">
          <button className="cursor-pointer text-[#d97919] border-2 border-[#60b246] uppercase p-3" onClick={handleGoBack}>
            Want More Items?
          </button>
          <button className="bg-[#d97919] p-2 text-slate-50 text-lg font-fsans font-semibold rounded-sm hover:shadow-md" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-1 md:grid-cols-7 gap-8 cartPage">
        <div className="p-8 col-span-1 md:col-span-5 ">
          {cartItem.map((item) => (
            <CartMenu item={item} cartItem={cartItem} key={item?.id} />
          ))}
        </div>
        {cartItem.length === 0 ? null : <CartCheckout cartItem={cartItem} />}
      </div>
    </div>
  );
};

export default Cart;
