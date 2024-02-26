import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
       // const restaurantData = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.5750157&lng=77.2297006");
       const restaurantData = await fetch('https://proxy.cors.sh/https://www.swiggy.com/mapi/homepage/getCards?lat=28.5750157&lng=77.2297006', {
        headers: {
        'x-cors-api-key': 'temp_5aa3568d4be1a9629a66474b9e552efe',
        }
      })

        const json = await restaurantData.json();
        setRestaurantList(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurantList.length === 0 ? (<Shimmer />) : (
        <div className="container">
            <div className="filter-cont">
                <div className="search-cont">
                    <input type="text" className="searchInput" value={searchRestaurant} onChange={(e) => {
                        setSearchRestaurant(e.target.value)
                    }} />
                    <button onClick={() => {
                        const restFiltered = restaurantList.filter((rest) => rest.info.name.toLowerCase().includes(searchRestaurant.toLowerCase()));
                        setFilteredRestaurant(restFiltered);
                    }} className="searchBtn">Search</button>
                </div>
                <button onClick={() => {
                    const filterRest = restaurantList.filter((res) => res?.info?.avgRating >= 4);
                    setRestaurantList(filterRest);
                }} className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="foodCard-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>

    )


}

export default Body;