import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        const restData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const json = await restData.json();
        console.log(json, "data is");
        setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return resList.length === 0 ? (<Shimmer />
    ) : (
    <div className="container">
        <div className="filter-cont">
            <button onClick={() => {
                const filteredRest = resList.filter((res) => res.data.avgRating >= 4);
                setResList(filteredRest);
                //console.log(filteredRest, "data is");
            }}
                className="filter-btn">Top Rated Restaurants</button>
        </div>
        <div className="foodCard-container">
            {
                resList.map((restaurant) =>

                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />


                )}
        </div>
    </div>
    )
}

export default Body;