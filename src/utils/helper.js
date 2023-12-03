export function filterData(searchInput, restaurantData){
    const filterData =  restaurantData.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
};