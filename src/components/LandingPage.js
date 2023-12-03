import React, { useRef, useState } from "react";
import logo from '/assets/loggo.png';
import locateLogo from "./Aassets/location.png";
import Footer from "./Footer";
import { CORS_PROXY_URL } from "../config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const LandingPage = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
	const navigate = useNavigate();
    const searchLocations = async (searchQuery) => {
        if(!searchQuery) 
            return;

        setLocations([]);
        const res = await fetch(`${CORS_PROXY_URL}https://www.swiggy.com/dapi/misc/place-autocomplete?input=${searchQuery}&types=`)
        const {data} = await res.json();

        setLocations(data);
    }

    const debounce = (callback, delay) => {
        let timer;

        return function(...args) {
            inputRef.current = args;
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
                callback(args);
            }, delay);
        }
    } 


	const loginhandler = () => {
		navigate("/login");
	};
	const signuphandler = () => {
		navigate("/signup");
	};

    const debouncedSearch = debounce(searchLocations, 250);

    const handleFetchLatLong = async (placeId) => {
        setLoading(true);

        const res = await fetch(`${CORS_PROXY_URL}https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`);
        const {data} = await res.json();

        if(data?.length > 0) {
            const { place_id, formatted_address, geometry: { location: { lat, lng } } } = data[0];

            const userLocation = {
                placeId: place_id,
                address: formatted_address,
                lat,
                lng
            };
            localStorage.setItem("swgy_userLocation", JSON.stringify(userLocation));
            window.location.reload();
        }
    }

    const fetchLocationByGPS = () => {

        let success = async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
                );
                const { place_id, address: { city, state, country } } = await response.json();
                
                const userLocation = {
                    placeId: place_id,
                    address: `${city}, ${state}, ${country}`,
                    lat,
                    lng
                };
                localStorage.setItem("swgy_userLocation", JSON.stringify(userLocation));
                window.location.reload();
            } catch (error) {
                alert('Error fetching address:', error);
                setLoading(false);
            }         
        }

        let error = () => {
            alert("Unable to retrieve your location");
            setLoading(false);
        }

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

	return (
		<div className="flex flex-col pt-[0px] h-full relative">
			<div className="">
				<div className="mt-[-40px] relative">
					<div className="relative z-10">
						<div className="min-w-[1200px] max-w-[1200px] mx-auto h-[540px]">
							<div className="w-[680px] pr-[40px] flex flex-col justify-around gap-0">
								<div className="flex flex-row justify-between">
									<div className="relative pt-[75px]">
										<Link to={"/"}>
											<img src={logo} width={80}
												
											>
											</img>
										</Link>
									</div>
									<div className="pt-[75px]">
										
										<button
											className="w-30 text-xl m-5  font-bold pl-3 pr-3 pt-1 pb-1 hover:text-orange-500" 
											onClick={loginhandler}
											>
											Login
										</button>
										

                                        
										<button
											className="w-30 text-xl m-2 text-white bg-black font-bold pl-4 pr-4 pt-1 pb-1"
											onClick={signuphandler}
											>
											SignUp
										</button>
	
										
									</div>
								</div>


								<div>
									<h1 className="font-semibold text-[36px] mt-[90px]">
										Hungry?
									</h1>
									<h2 className="font-light text-2xl text-[#686b78]">
										Order food from favourite restaurants near
										you.
									</h2>

									<div className="relative mt-[35px] flex overflow-hidden">
										<div className="relative flex-1 ">
											<div className="px-1.5 border border-[#bebfc5]">
												<input
													type="text"
													className="pl-[15px] pr-[160px] font-medium outline-0 text-[18px] w-full text-ellipsis overflow-hidden h-14 leading-[28px]"
													placeholder="Enter your delivery location"
													maxLength={30}
													ref={inputRef}
													onChange={(e) => debouncedSearch(e.target.value)}
												/>
											</div>
											<button
												className="absolute right-[150px] top-2.5 text-[#535665] 
												font-medium text-[14px] cursor-pointer px-3 py-2.5 hover:bg-[#e9e9eb]"
												onClick={fetchLocationByGPS}
												disabled={loading ? true : false}
											>
												{loading ? "Locating..." : "⨁Locate Me"} 
											</button>
											
											{locations?.length > 0 && (
												<div className="">
													{locations?.map(location => (
														<button 
															key={location?.place_id} 
															className="cursor-pointer text-[#535665] min-h-[40px] font-normal w-full hover:text-[#fc8019] 
															px-6 py-5 border-dashed border-b-[2px] text-left text-ellipsis border-[#bebfc5] text-base overflow-hidden bg-white"
															onClick={() => handleFetchLatLong(location?.place_id)}
														>
																{location?.description}
														</button>
													))}                             
												</div>
											)}
										</div>
										<div
											className="absolute w-[140px] h-[58px] leading-[58px] font-bold text-[16px] 
											uppercase text-white bg-[#fc8019] text-center right-0"
										>
											Find Food
										</div>
										
									</div>
								</div>

				
								<div >
						        
									<div className="opacity-40 text-lg mt-5 ">
										POPULAR CITIES IN INDIA
									</div>
									<div className="text-md font-semibold text-lg flex flex-col gap-1">

										<div className="flex flex-row gap-2">
											<span className="opacity-50 pr-[90px]">Ahmedabad</span> 
											<span className="opacity-30 pr-[80px]">Bangalore</span>
											<span className="opacity-50 pr-[70px]">Chennai</span>
											<span className="opacity-30 pr-[50px]">Delhi</span>
											<span className="opacity-50 pr-[70px]">Gurgaon</span>
											<span className="opacity-30 pr-[85px]">Hyderabad</span>
											<span className="opacity-50 pr-[60px]">Kolkata</span>
											<span className="opacity-30 pr-[70px]">Mumbai</span>
										</div>
										<div>
											<span className="opacity-50 pr-[80px]">Pune <span className="opacity-30">& more</span></span>
											
										</div>
										 
									</div>
								</div>
							</div>
						</div>
						<div
							className="absolute bg-center right-0 h-full bg-cover top-0 bg-no-repeat bg-[url('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq')]"
							style={{ left: "calc(50% + 80px)" }}
						>	
						</div>
					</div>
					<div className="bg-[#2b1e16] px-5 z-0">
						<div className="relative flex min-w-[1200px] max-w-[1200px] mx-auto pb-[80px] justify-between">
							<div className="text-center text-white">
								<div className="flex h-[250px] items-end justify-center pt-0">
									<img
										className="mb-[42px] z-0"
										width={115}
										height={240}
										src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
										alt=""
									/>
								</div>
								<div className="text-xl mt-0 font-semibold ">
									No Minimum Order
								</div>
								<div className="w-[260px] text-[15px] mt-2.5 text-[#e0cbc1] leading-[1.3]">
									Order in for yourself or for the group, with
									no restrictions on order value
								</div>
							</div>
							<div className="text-center text-white">
								<div className="flex h-[250px] items-end justify-center">
									<img
										className="mb-[42px]"
										width={112}
										height={206}
										src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
										alt=""
									/>
								</div>
								<div className="text-xl mt-0 font-semibold ">
									Live Order Tracking
								</div>
								<div className="w-[260px] text-[15px] mt-2.5 text-[#e0cbc1] leading-[1.3]">
									Know where your order is at all times, from
									the restaurant to your doorstep
								</div>
							</div>
							<div className="text-center text-white">
								<div className="flex h-[250px] items-end justify-center">
									<img
										className="mb-[42px]"
										width={124}
										height={188}
										src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
										alt=""
									/>
								</div>
								<div className="text-xl mt-0 font-semibold ">
									Lightning-Fast Delivery
								</div>
								<div className="w-[260px] text-[15px] mt-2.5 text-[#e0cbc1] leading-[1.3]">
									Experience Swiggy's superfast delivery for
									food delivered fresh & on time
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default LandingPage;