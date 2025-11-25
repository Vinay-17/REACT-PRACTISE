import { useEffect } from "react";
import CategoryItems from "./CategoryItems";
import {useState } from "react";


const RestaurantCategory = ({ data , showItems,setShowIndex }) => {
    const title = data?.title || "Category";
       const handleClick = ()=>{
      setShowIndex()
    }
  return (
    <div className="restaurant-category">
      <div className="accordion-body" onClick={handleClick}>
        <span className="category-text">{`${title} (${data.itemCards.length})`}</span>
        <span className="category-arrow">🔽</span>
      </div>
       {showItems && (
      <div className="categoryitems">
        <CategoryItems items={data.itemCards} />
      </div>
       )}
    </div>
  );
};

export default RestaurantCategory;
