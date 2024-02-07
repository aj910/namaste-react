import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resFoodList from "../utils/mockData";


const Body = () => {
    const [resFoodList] = useState([
        {
            "data": {
                "type": "F",
                "id": "399890",
                "name": "Pizza Wings",
                "uuid": "32ca4ccd-456c-474d-9818-ab5c4b21a02b",
                "city": "4",
                "area": "Uttam Nagar",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "a46a6aa00709f771fabb45c864a81b5e",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Mexican",
                    "American"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 22,
                "minDeliveryTime": 22,
                "maxDeliveryTime": 22,
                "slaString": "22 MINS",
                "lastMileTravel": 1.2999999523162842,
                "slugs": {
                    "restaurant": "pizza-wings-uttam-nagar-uttam-nagar",
                    "city": "delhi"
                },
                "cityState": "4",
                "address": "GROUND FLOOR WITHOUT ROOF RIGHTS OF PROP NO.-C1, 1A RAMA PARK UTTAM NAGAR-110059, DWARKA, South West   , Delhi-110059",
                "locality": "Rama Park",
                "parentId": 159048,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "FLAT150 off",
                    "shortDescriptionList": [
                        {
                            "meta": "FLAT150 off | Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "FLAT150 off | Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "₹150 OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "FLAT150 off | Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3800,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 3800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3800",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.2 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "399890",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.0",
                "totalRatings": 1000,
                "new": false
            },
        }
    ])
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