import "./CartWidget.css"
import {BsCartCheck} from "react-icons/bs"
import { Link } from "react-router-dom"

export const CartWidget = () => {
  return (
    <Link to="/Cart">
      <div className="container-cart">
            <BsCartCheck 
                style={{
                fontSize: "2rem",
                color: "black",
              }}
            />
            
            <div className="bubble-counter">
              <span>12</span>
            </div>
      </div>
    </Link>
    )
}
