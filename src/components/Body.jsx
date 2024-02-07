import React from "react";
import RestaurantCard from "./RestaurantCard";
import resFoodList from "../utils/mockData";

const displayData = (a, b) => {
    alert(`Sum is ${a + b}`);
}


const Body = () => {
    return (
        <div className="container">
            <div className="filter-cont">
               <button onClick={displayData} className="filter-btn">Top Rated Restaurants</button>
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