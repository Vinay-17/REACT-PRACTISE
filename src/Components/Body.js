// import RestaurantCard from "./RestaurantCard";
// import { useState,useEffect } from "react";
// import Shimmer from "./Shimmer";
// const Body = () => {
//     const [listOfRestaurants ,setListOfRestaurants] = useState([]);
//     const [searchText, setSearchText] = useState("");
//     const [searchFilter , setSearchFilter] = useState([]);

//      useEffect( ()=>{
//           fetchData();
//     },[])
//     const fetchData = async () =>{
//        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.381190618016298&lng=80.53263969719409&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//        const json = await data.json()
//      setListOfRestaurants(
//         json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
//         setSearchFilter(
//           json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
//          }
//          if (!listOfRestaurants || listOfRestaurants.length === 0) return <Shimmer />;
//          return (
//         <>
//         <div className="body">
//             <div className="btn-container">
//             <input className="input-type" 
//             placeholder="Search restaurants..."
//             value={searchText}
//             onChange={
//                 (e)=> setSearchText(e.target.value)
//             }
//             /> 
//             <button className="search-btn" 
//             onClick={
//                 () => {
//                     const filteredList = listOfRestaurants.filter((res) =>
//                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
//                 );
//                   setSearchFilter(filteredList);
//                  } }>search...</button> 
//                <button className="filter-btn" onClick={
//                  () =>{
//                const filteredList=listOfRestaurants.filter(
//                 (res)=>res.info.avgRating>4.2 );
//                 setSearchFilter(filteredList)
//                  }
//            }>Top Rated Restaurants</button>
//            </div>
//             <div className="res-container">
//            {searchFilter.map((restaurent)=>{
//             return <RestaurantCard key={restaurent.info.id} resObj={restaurent} />
//            })}
            
//             </div>
//         </div>
//         </>
//     )
 
// }

// export default Body;


import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
// import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();

    const cards = json?.data?.data?.cards || [];
    let restaurants = [];
    cards.forEach((cardObj) => {
      const resList = cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (resList && resList.length > 0) {
        restaurants = restaurants.concat(resList);
      }
    });

    setListOfRestaurants(restaurants);
    setSearchFilter(restaurants);
  };
  console.log(listOfRestaurants)
  const OnlineStatus = useOnlineStatus() 
  if (!OnlineStatus) {
    return <h2 style={{ textAlign: "center", color: "red" }}>
      PLEASE CHECK YOUR INTERNET CONNECTION
    </h2>;
  }
   const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  if (!listOfRestaurants || listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      
      <div className="btn-container">
        <input
          className="input-type"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchFilter(filteredList);
          }}
        >
          search...
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setSearchFilter(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {searchFilter.map((restaurant) => (
          <Link  key={restaurant.info.id} to={`/menu/${restaurant.info.id}`}>
           {restaurant?.info?.sla?.deliveryTime > 30
  ? <PromotedRestaurantCard resObj={restaurant} />
  : <RestaurantCard resObj={restaurant} />
}
</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
