import React from "react";
import { useState } from "react";
import data from "./data";
import "./ActiveCarts.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

function ActiveCarts() {
  const [activeCartItems, setActivecartItems] = useState(data);

  return (
    <>
      <div className="line"></div>
      <div className="activecarts">
        <div className="activecarts__headings">
          <p>
            Product Information <span> ↓</span>
          </p>
          <p>Cart Name ↓</p>
          <p>Shipping Point ↓</p>
          <p>Created By ↓</p>
          <p>Expiry ↓</p>
        </div>
        {activeCartItems.map((item) => {
          const {
            productInformation,
            cartName,
            shippingPoint,
            createdBy,
            expiry,
          } = item;
          return (
            <div className="cartItems">
              <p>{productInformation} </p>
              <p>{cartName}</p>
              <p>{shippingPoint}</p>
              <p>{createdBy}</p>
              <p>{expiry}</p>
            </div>
          );
        })}
        <Link to="/desktop2">
          <AddCircleIcon
            style={{
              fontSize: "4rem",
              color: "#66332B",
              position: "fixed",
              top: "80%",
              marginLeft: "90%",
            }}
          />
        </Link>
      </div>
    </>
  );
}

export default ActiveCarts;
