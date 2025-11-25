import React from 'react';
import { CDN_URL } from '../Utils/Constants';

const CategoryItems = ({ items }) => {
  return (
    <div className="category-items-container">
      {items.map((item, index) => {
        const info = item?.card?.info;
        return (
          <div key={index} className="category-item">
            <div className="category-item-info">
              <span className="category-item-name">
                {info.name} - ₹{(info.price / 100).toFixed(2)}
              </span>
              {info.description && (
                <p className="category-item-description">{info.description}</p>
              )}
            </div>

            {info.imageId && (
              <div className="category-item-image-button">
                <img
                  src={`${CDN_URL}${info.imageId}`}
                  alt={info.name}
                  className="category-item-image"
                />
                <button className="category-item-button">Add</button>
              </div>
            )}
            
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItems;
