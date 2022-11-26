import "./CartWidget.css"
import {BsCartCheck} from "react-icons/bs"

export const CartWidget = () => {
  return (
    <div className="container-cart">
            <BsCartCheck 
              style={{
                fontSize: "2rem",
                color: "#fff"
              }}
            />
            </div>
    )
}
