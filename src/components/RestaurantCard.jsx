import React from "react";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId, costForTwo, avgRating} = resData?.data;
    // console.log(resData.data.name)
    return (
        
        <div className="rest-container">
            <h3 className="card-text">{name}</h3> 
            <img className="food-cardImg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/" + cloudinaryImageId}
                 alt="food card" />
            <h4>{cuisines.join(", ")}</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}

export default RestaurantCard;
