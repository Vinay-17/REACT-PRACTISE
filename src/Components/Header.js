import { LOGO_URL } from "../Utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";


const Header = () => {
  const OnlineStatus = useOnlineStatus()
  const te = "Logout";
  const [text , setText] = useState(te) 
    return (
        <>
        <div className="header">
            <img className="h-logo" alt="LOGO" src={LOGO_URL}/>
            <div className="nav-items">
              <ul>
                <li>OnlineStatus{OnlineStatus? "🟢" : "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                 <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <li>
                  <button className="test-btn" onClick={
                  () => {
                    (text === te) ? (setText("Login")) :(setText("Logout"))
                  }
                }>{text}</button></li>
              </ul>
            </div>
        </div>
            </>
    )
}
export default Header;