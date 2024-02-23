import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchRestaurant, setSearchRestaurant] = useState("");

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        //const restData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.665247&lng=77.121844&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const restaurantData = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.1206564&lng=72.8939321");

        const json = await restaurantData.json();
        console.log(json, "data is");
        setRestaurantList(json.data.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
        setLoading(false);
        // setResList(null);

    }

    if (loading) {
        return <Shimmer />;
    }

    return (
        <div className="container">
            <div className="filter-cont">
                <div className="search-cont">
                    <input type="text" className="searchInput" value={searchRestaurant} onChange={(e) => {
                        setSearchRestaurant(e.target.value)
                    }} />
                    <button onClick={() => {
                        console.log(searchRestaurant);
                        const restFiltered = restaurantList.filter((rest) => rest.data.name.toLowerCase().includes(searchRestaurant.toLowerCase()));
                        setFilteredRestaurant(restFiltered);
                    }} className="searchBtn">Search</button>
                </div>
                <button onClick={() => {
                    const filterRest = restaurantList.filter((res) => res.data.avgRating >= 4);
                    setRestaurantList(filterRest);
                }} className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="foodCard-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );


}

export default Body;