import React from "react";
import RestaurantCard from "./RestaurantCard";
import resFoodList from "../utils/mockData";


const Body = () => {
    return (
        <div className="container">
            <div className="filter-cont">
               <button onClick={() => {}} className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="foodCard-container">
             {
                resFoodList.map((restaurant) => (
                
                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                
                
            ))}
            </div>
        </div>
    )
}

export default Body;