// import React, { useState, useEffect } from 'react';
// import Shimmer from './Shimmer';
// import RES_MENU from '../Utils/menu';
// import { useParams } from 'react-router-dom';

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const data = await fetch(`${RES_MENU}${resId}`);
//         const json = await data.json();
//         setResInfo(json);
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       }
//     };

//     if (resId) fetchMenu();
//     console.log("useEffect called");
//   }, [resId]);

//   if (!resInfo) return <Shimmer />;

//   const { name, cuisines, costForTwo } =
//     resInfo?.data?.cards[2]?.card?.card?.info || {};

//   const itemCards =
//     resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card
//       ?.itemCards || [];

//   console.log(itemCards);

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <h3>{cuisines?.join(", ")} - ₹{costForTwo}</h3>
//       <h3>Menu</h3>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - ₹
//             {(item.card.info.price || item.card.info.defaultPrice) / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const [ showIndex , setShowIndex ] = useState(null)
  const { resId } = useParams();
const { resInfo , error } =useRestaurantMenu (resId);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []);
    const menuCategory = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const itemCategory = menuCategory.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(itemCategory)
  return (
    <div className='menu-container'>
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")} - ₹{costForTwo}</h3>
      </div>
      <div className='accordian-container'>
       { 
  
       itemCategory.map((category, index) => (
    <RestaurantCategory 
      key={index}
      data={category?.card?.card}
      showItems={index === showIndex? true : false}
      setShowIndex = {() =>{setShowIndex(index)}}
    />
    ))
    }
       </div>
    </div>
  );
};

export default RestaurantMenu;

