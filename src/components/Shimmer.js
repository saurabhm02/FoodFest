import React from "react";


const CardShimmer = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img stroke animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
      </div>
    );
  };

  
export const ResturantShimmer = () => {
    return (
      <>
        <div className="bg-white px-6 py-4 my-8 mx-4 rounded-md shadow-lg">
          <div className="flex flex-col-reverse md:flex-row  justify-between items-center py-8 px-4 animate-pulse">
            <div className="ml-4 mt-8 md:mt-0">
              <div className="bg-[#e0dede] m-3 w-[300px] sm:w-[350px] h-[35px]"></div>
              <div className="bg-[#e0dede] m-3 w-[250px] h-[26px]"></div>
              <div className="bg-[#e0dede] m-3 w-[120px] h-[20px]"></div>
              <div className="bg-[#e0dede] m-3 w-[100px] h-[18px]"></div>
            </div>
            <div className="ml-4 md:ml-0">
              <div className="mr-5 w-[300px] lg:w-[350px] h-[200px] bg-[#e0dede]"></div>
            </div>
          </div>
          <div className="flex justify-evenly items-center flex-wrap mt-4">
          { Array(12).fill(" ").map( (e, index)  => 
            <div className="flex justify-between items-center my-6 mx-4 w-[300px] lg:w-[420px] border border-[#ccc] rounded-lg p-4 animate-pulse">
                <div className="">
                  <div className="m-2 bg-[#e0dede] w-[170px] lg:w-[250px] h-[15px]"></div>
                  <div className="m-2 bg-[#e0dede] w-[130px] lg:w-[150px] h-[12px]"></div>
                  <div className="m-2 bg-[#e0dede] w-[100px] h-[10px]"></div>
                </div>
                <div className="w-[80px] h-[50px] lg:w-[100px] lg:h-[70px] bg-[#e0dede]"></div>
            </div>
              )}
          </div>
        </div>
      </>
    );
};

  export const MenuShimmer = () => {
    return (
      <div className="restaurant-menu">
        <div className="restaurant-summary stroke-color animate">
          <img className="shimmer-img stroke animate" />
          <div className="restaurant-summary-details">
            <h2 className="shimmer-w40  stroke animate"></h2>
            <p className="shimmer-w20 stroke animate"></p>
            <div className="shimmer-w60  stroke animate">
            </div>
          </div>
        </div>
  
        <div className="restaurant-menu-content">
          <div className="menu-items-container">
            <div className="menu-title-wrap ">
              <h3 className="shimmer-w40 stroke animate"></h3>
              <p className="shimmer-w20 stroke animate"></p>
            </div>
            <div className="menu-items-list">
              { Array(4).fill(" ").map( (e, index)  => 
              <div className="shimmer-menu-card" key={index}>
                <div className="shimmer-item-details">
                  <h3 className="shimmer-w40  stroke animate"></h3>
                  <p className="shimmer-w20  stroke animate"> </p>
                  <p className="shimmer-w60  stroke animate"></p>
                </div>
                <div className="shimmer-img-wrapper">
                  <img className="shimmer-img stroke animate" /> 
                  <div className="shimmer-btn stroke animate"> </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
  

  // const Shimmer = () => {
  //   return (
  //     <div className="pt-0">
  //        <div className="h-[344px] bg-[#171a29] flex flex-col justify-center items-center ">
  //           <div className="relative w-[80px] h-[80px] overflow-hidden">
  //             <div className="w-full h-full rounded-full bg-white absolute  bg-gradient-to-b 
  //                from-gray-200 to-slate-800 to-50% after:absolute after:rounded-full after:bg-[#171a29]
  //                 after:content-['*'] after:w-[72px] after:h-[72px] after:top-1 after:left-1 after:block 
  //                 animate-spin">
  //             </div>
  //             <img 
  //                 className="w-[40px] z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " 
  //                   src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/fries_ivyqs5" 
  //                   alt="carousel" 
  //             />
  //         </div>
  //         <div className="mt-8 font-light tracking-wide text-[#cbd5e1] text-[26px]">Looking for great food near you ...</div>
  //         </div>
  //         <div className="shimmer-container">
  //           {/* create a new Array instance using Array() constructor and map through every element of array */}
  //           {Array(10).fill("").map((e, index) => {
  //             return <CardShimmer key={index} />;
  //           })}
  //         </div>
  //     </div>
  //   );
  // };
  // export default Shimmer;


export const SearchShimmer = () => {
    return (
        <>
            <div className="flex m-2.5">
                <div className="w-20 bg-[#f2f6fc] h-12 p-1 mr-4"></div>
                <div className="flex flex-1 flex-col justify-center">
                    <div className="w-40 h-2 bg-[#f2f6fc] m-1.5"></div>
                    <div className="w-16 h-2 bg-[#f2f6fc] m-1.5"></div>
                </div>
            </div>
            <div className="flex m-2.5">
                <div className="w-20 bg-[#f2f6fc] h-12 p-1 mr-4"></div>
                <div className="flex flex-1 flex-col justify-center">
                    <div className="w-40 h-2 bg-[#f2f6fc] m-1.5"></div>
                    <div className="w-16 h-2 bg-[#f2f6fc] m-1.5"></div>
                </div>
            </div>
            <div className="flex m-2.5">
                <div className="w-20 bg-[#f2f6fc] h-12 p-1 mr-4"></div>
                <div className="flex flex-1 flex-col justify-center">
                    <div className="w-40 h-2 bg-[#f2f6fc] m-1.5"></div>
                    <div className="w-16 h-2 bg-[#f2f6fc] m-1.5"></div>
                </div>
            </div>
            <div className="flex m-2.5">
                <div className="w-20 bg-[#f2f6fc] h-12 p-1 mr-4"></div>
                <div className="flex flex-1 flex-col justify-center">
                    <div className="w-40 h-2 bg-[#f2f6fc] m-1.5"></div>
                    <div className="w-16 h-2 bg-[#f2f6fc] m-1.5"></div>
                </div>
            </div>
        </>
    )
}

  const Shimmer = () => {
    return (
          <div className="pt-[80px]">
              <div className="h-[344px] bg-[#171a29] flex flex-col justify-center items-center">
                  <div className="relative w-[80px] h-[80px] overflow-hidden ">
                      <div className="w-full h-full rounded-full bg-white absolute bg-gradient-to-b 
                          from-gray-200 to-slate-800 to-50% after:absolute after:rounded-full after:bg-[#171a29]
                          after:content-['*'] after:w-[72px] after:h-[72px] after:top-1 after:left-1 after:block 
                          animate-spin">
                      </div>
                      <img 
                          className="w-[40px] z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/fries_ivyqs5" 
                          alt="carousel" 
                      />
                  </div>
                  <div className="mt-8 font-light tracking-wide text-[#cbd5e1] text-[26px]">Looking for great food near you ...</div>
              </div>
              <div className="max-w-[1080px] grid grid-cols-4 gap-7 mx-auto pt-[76px]">
                  {
                      Array.from({ length: 8 }, (_, index) => (
                          <div key={index} className="h-[256px]">
                              <div className="bg-[#eef0f5] h-[166px]"></div>
                              <div className="bg-[#eef0f5] h-[10px] mt-5 w-2/3"></div>
                              <div className="bg-[#eef0f5] h-[10px] mt-5 w-1/4"></div>
                          </div>
                      ))
                  }
              </div>
          </div>
      )
  }
  
  export default Shimmer;