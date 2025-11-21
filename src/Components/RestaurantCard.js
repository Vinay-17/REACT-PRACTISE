import { CDN_URL } from "../Utils/Constants";
const RestaurantCard = ({ resObj }) =>{
    return(
        <>
        <div className="card-container">
            <img className="res-logo" src={CDN_URL + resObj.info.cloudinaryImageId } alt="card-logo"/>
            <h3>{resObj.info.name}</h3>
            <h4>{resObj.info.avgRating}</h4>
            <h4>{resObj.info.cuisines.join(",")}</h4>
            <h4>{resObj.info.costForTwo}</h4>
            <h4>{resObj.info.sla.deliveryTime} mins</h4>

        </div></>
    )
}
export default RestaurantCard;