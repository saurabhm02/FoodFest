import React from 'react';
import { Img_Url } from '../config';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FoodCarousel = (carousel) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
        <>
           <h1 className="mt-0 font-bold text-2xl mb-2">Best offers for you</h1>
            {carousel.data && carousel.data.info ? (
              <Carousel responsive={responsive}>
                {carousel.data.info.map((data) => (
                  <div key={data.id}>
                    <img
                      src={Img_Url+ data?.imageId}
                      className=" object-cover rounded-3xl h-full block w-[420px] m-3 first:ml-0 last:mr-0 cursor-pointer"
                      alt={`Image ${data.id}`}
                    />
                  </div>

                ))}
              </Carousel>
            ) : (
              <p>Loading or empty data...</p>
            )}
        </>
  );
};

export default FoodCarousel;


{/* <>
      <h2 className='font-bold text-2xl my-4'>Best offers for you</h2>
      {carousel.data && carousel.data.info ? (
        <Carousel responsive={responsive}>
          {carousel.data.info.map((data) => (
            <div key={data.id} className='px-2 cursor-pointer'>
              <img src={Img_Url + data.imageId} alt={data.altText} />
            </div>
          ))}
        </Carousel>
      ) : (
        <p>Loading or empty data...</p>
      )}
    </> */}
