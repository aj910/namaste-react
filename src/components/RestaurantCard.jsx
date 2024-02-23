import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId, costForTwo, avgRating} = resData?.info
  
    // console.log(resData.data.name)
    return (
        
        <div className="rest-container">
            <h3 className="card-text">{name}</h3> 
            <img className="food-cardImg" src={CDN_URL + cloudinaryImageId}
                 alt="food card" />
            <h4>{cuisines.join(", ")}</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}

export default RestaurantCard;
