import { LOGO_URL } from "../Utils/Constants";
import { useState } from "react";
const Header = () => {
  const te = "Logout";
  const [text , setText] = useState(te) 
    return (
        <>
        <div className="header">
            <img className="h-logo" alt="LOGO" src={LOGO_URL}/>
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
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