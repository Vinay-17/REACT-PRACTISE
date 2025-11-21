import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants ,setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchFilter , setSearchFilter] = useState([])

     useEffect( ()=>{
          fetchData();
    },[])
    const fetchData = async () =>{
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.381190618016298&lng=80.53263969719409&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json()
       console.log(json)
   setListOfRestaurants(
  json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setSearchFilter(
  json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
     return  (listOfRestaurants.length === 0)?
  (<Shimmer/>): 
  (
        <>
        <div className="body">
            <div className="btn-container">
            <input className="input-type" 
            placeholder="Search restaurants..."
            value={searchText}
            onChange={
                (e)=> setSearchText(e.target.value)
            }
            /> 
            <button className="search-btn" 
            onClick={
                () => {
                    const filteredList = listOfRestaurants.filter((res) =>
                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                  setSearchFilter(filteredList);
                 } }>search...</button> 
               <button className="filter-btn" onClick={
                 () =>{
               const filteredList=listOfRestaurants.filter(
                (res)=>res.info.avgRating>4.2 );
                setSearchFilter(filteredList)
                 }
           }>Top Rated Restaurants</button>
           </div>
            <div className="res-container">
           {searchFilter.map((restaurent)=>{
            return <RestaurantCard key={restaurent.info.id} resObj={restaurent} />
           })}
            
            </div>
        </div>
        </>
    )
 
}
export default Body;