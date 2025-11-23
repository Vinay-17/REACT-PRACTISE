import { CDN_URL } from "../Utils/Constants";
const RestaurantCard = ({ resObj }) =>{
    return(
        <>
        <div className="card-container">
            <img
             className="res-logo"
             src={resObj?.info?.cloudinaryImageId ? CDN_URL + resObj.info.cloudinaryImageId : "https://via.placeholder.com/150"}
              alt={resObj?.info?.name || "Restaurant"}
               />

            <h3>{resObj.info.name}</h3>
            <h4>{resObj.info.avgRating}</h4>
            <h4>{resObj.info.cuisines.join(",")}</h4>
            <h4>{resObj.info.costForTwo}</h4>
            <h4>{resObj.info.sla.deliveryTime} mins</h4>

        </div></>
    )
} 
export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
       return(
        <>
        <div>
            <label className="label">Express Delivery 🚆</label>
            <RestaurantCard {...props}/>
        </div>
        </>
       )
    }
 }
 
 
export default RestaurantCard;
