import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const RestaurantCarousel = (restaurants) => {
  console.log(restaurants.data);
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3.3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2.5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5
        }
      };
  return (
    <>
     {restaurants?.data ? (
        <Carousel responsive={responsive}>
          {restaurants?.data.map((data) => (
            <div key={data.info.id} className='pr-8'>
              <Link 
              to={"/restaurant/" + data.info.id}
              key={data.info.id}
              >
            <RestaurantCard {...data.info}/>
            </Link>
            </div>
          ))}
          </Carousel>
          ) : (
            <>
            </>
          )}
    </>
  )
}

export default RestaurantCarousel