import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Profile from "./components/ProfileClass";
import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Help from "./components/Help";
import LandingPage from "./components/LandingPage";
import Search from "./components/SearchPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const AppLayout = ()=>{
    return(
            <Provider store={store}>
                <Header/>
                <Outlet/>
                <ToastContainer />
                <Toaster/>
                <Footer/>
            </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/", 
        element: JSON.parse(localStorage.getItem("swgy_userLocation")) !== null ? <AppLayout /> : <LandingPage />,
        errorElement : <Error/>,
        children : [
            {
                path: "/", 
                element: <Body/>,
            },
            {
                path: "/landing",
                element: <LandingPage />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/about", 
                element: <About/>,
                children: [{
                    path: "profile",
                    element: <Profile/>,
                }]
            },
            {
                path: "/contactUs", 
                element: <Contact/ >,
            },
            {
                path :"/help",
                element: <Help/>
            },

            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path : "/login",
                element : <Login/>,
            },
            {
                path : "/signup",
                element : <SignUp/>,
            },

        ],
    },

]);

export default appRouter;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 