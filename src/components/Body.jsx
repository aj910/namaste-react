import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resFoodList from "../utils/mockData";


const Body = () => {
    const [resList, setResList] = useState(resFoodList);
    return (
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