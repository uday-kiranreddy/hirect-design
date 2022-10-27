import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Desktop2.css";
import { Link } from "react-router-dom";

function Desktop2() {
  return (
    <div className="Desktop2">
      <div className="Desktop2__content">
        <Link to="/"style={{ textDecoration: "none" }}>
          <div className="Desktop2__left" style={{color:"white",textDecoration:"none"}}>
            <KeyboardBackspaceIcon />
            <h5>Create a new order</h5>
          </div>
        </Link>
        <div className="Desktop2__left">
          <MoreVertIcon />
        </div>
      </div>
      <div className="Desktop2__boxes">
        <div className="Desktop2__singlebox">
          <div className="Desktop2__singlebox__left">
            <h3>Configure your door from scratch</h3>
            <p>Residential, Commercial , Entry doors</p>
          </div>
          <div className="Desktop2__singlebox__right">
            <Link to='/Desktop3'>
            <KeyboardArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="Desktop2__singlebox">
          <div className="Desktop2__singlebox__left">
            <h3>Parts / Openers</h3>
            <p>Order parts and openers</p>
          </div>
          <div className="Desktop2__singlebox__right">
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="Desktop2__singlebox">
          <div className="Desktop2__singlebox__left">
            <h3>Direct Item Entry</h3>
            <p>Order Parts/ opners using a product id</p>
          </div>
          <div className="Desktop2__singlebox__right">
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="Desktop2__singlebox">
          <div className="Desktop2__singlebox__left">
            <h3>Choose from Favourites</h3>
            <p>Re-order door from your favourites</p>
          </div>
          <div className="Desktop2__singlebox__right">
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop2;
