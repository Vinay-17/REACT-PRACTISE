import React from 'react'
import { useEffect , useState } from 'react';
import RES_MENU from './menu';

const useRestaurantMenu = (resId) => {
    const [resInfo , setResInfo] = useState(null);
    const [error, setError] = useState(null);
  useEffect( ()=> {
    const fetchMenu =  async () =>{
      try {
        const data = await fetch (`${RES_MENU}${resId}`);
        const json = await data.json();
        setResInfo(json);
      }catch(err){
        console.error("error fetching menu",err);
        setError(err)
      }
    };
    fetchMenu()
  },[]);
  return { resInfo , error }
}

export default useRestaurantMenu;