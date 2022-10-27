import React, { useState } from "react";
import "./Desktop4.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Desktop5.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
function Desktop5() {
  const [count, setCount] = useState(0);

  //minus function
  const handleMinus = () => {
    setCount(count - 1);
  };
  //plus function
  const handlePlus = () => {
    setCount(count + 1);
  };
 const handleSubmit=()=>{
  window.alert("Successfully Placed Order")
 }
  return (
    <div className="desktop5">
      <div className="Desktop4__content">
        <Link to="/desktop4" style={{ textDecoration: "none" }}>
          <div className="Desktop4__left" style={{ color: "white" }}>
            <KeyboardBackspaceIcon />
            <h5>
              Classic_jhon4543
              <span style={{ color: "#E4E4E4" }}> Cart #1234567</span>
            </h5>
          </div>
        </Link>
        <div className="Desktop4__left">
          <MoreVertIcon />
        </div>
      </div>
      <div className="desktop5__firstbox">
        <h3 style={{ color: "#34495E" }}>
          10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE,
          5TH GENERATION FINISH WALDER DOOR
        </h3>
        <div className="text__content">
          <p style={{ color: "#8894A0", marginTop: "3px" }}>
            Job Name: Front door with glass{" "}
          </p>
          <Link to="/">
            <span
              style={{
                color: "brown",
                textDecoration: "underline",
                marginLeft: "5px",
              }}
            >
              Change
            </span>
          </Link>
        </div>
        <p style={{ color: "#8894A0", marginTop: "3px" }}>
          Product #CWD • Garage Door
        </p>
        <p style={{ color: "#8894A0", marginTop: "3px" }}>
          Availability: <span style={{ color: "green" }}>IN STOCK</span>
          <span style={{ color: "black" }}>(Available for Pickup)</span>
        </p>
        <div className="desktop5__gridbox">
          <div className="btn-group">
            <button onClick={handleMinus}>-</button>
            <button>{count}</button>
            <button onClick={handlePlus}>+</button>
          </div>
          <div className="center-flex">
            <p>Standard Multiplier: .432</p>
            <p> Secondary Multipliers Applied</p>
            <p>% Apply MPQ</p>
          </div>
          <div className="last__child">
            <p>
              Net Price:
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                $4500.00
              </span>{" "}
            </p>
            <p>Unit Price : $4800.00</p>
            <p>View Price Details</p>
          </div>
        </div>
        <div className="button-grid">
          <button>
            <FavoriteIcon />
            Favourites
          </button>
          <button>
            <EditIcon />
            Edit
          </button>
          <button>
            <ContentCopyIcon />
            Copy
          </button>
          <button>
            <DeleteIcon />
            Delete
          </button>
        </div>
      </div>
      <div className="desktop5__secondbox">
        <div className="main__grid">
          <div
            className="input-grid"
            style={{
              color: "#34495E",
              border: "1px solid grey",
              padding: "1rem",
              borderRadius: "4px",
              margin: "8px",
            }}
          >
            <div>
              <p>Change Delivery Date</p>
              <input
                placeholder="Example: 31-DEC-1999"
                type="text"
                onfocus="(this.type='date')"
                id="date"
              />
              <p>Standard Delivery: Tue May 28 - 2019</p>
            </div>
            <div>
              <p>Purchase Order Number</p>
              <input type="text" placeholder="Enter PO Number" />
              <p>This PO will be useful to track this order items </p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid grey",
              padding: "1rem",
              borderRadius: "4px",
              margin: "8px",
            }}
            className="bill__summary"
          >
            <h4 style={{ color: "#34495E" }}>Bill Summary</h4>
            <div className="flexer">
              <p>Sub Total</p>
              <span>$4500.00</span>
            </div>
            <div className="flexer">
              <p>Energy Surchange</p>
              <span>$70.68</span>
            </div>
            <div className="flexer">
              <p>Sales Tax</p>
              <span>$490.93</span>
            </div>
            <div className="flexer">
              <p style={{ fontWeight: "bold" }}>Total</p>
              <span style={{ color: "black", fontWeight: "bold" }}>
                $5061.11
              </span>
            </div>
            <br />
            <input type="checkbox" />
            Apply Tax
            <p style={{ color: "#8894A0" }}>
              (The 1% iStore discount is calculated into the total price for all
              doors and door parts. Please refer to the quote or order
              acknowledgment for details.)
            </p>
          </div>
        </div>
      </div>
      <div className="desktop5__thirdbox">
        <div className="last__grid">
          <div>
            <h4 style={{ color: "#34495E" }}>Billing To</h4>
            <p>Bement Jared</p>
            <a href="#"> Change</a>
            <p style={{color:"#2A292A"}}>144 Curt Shores, 50, Madison Avenue Hixson - 42040</p>
            <p style={{color:"#2A292A"}}>Contact: (123) 456 7890</p>
          </div>
          <div>
            <h4 style={{ color: "#34495E" }}>Shipping To</h4>
            <p>Bement Jared</p>
            <a href="#"> Change</a>
            <p style={{color:"#2A292A"}}>144 Curt Shores, 50, Madison Avenue Hixson - 42040</p>
            <p style={{color:"#2A292A"}}>Contact: (123) 456 7890</p>
          </div>
        </div>
      </div>
      <div className="desktop5__lastfinal">
        <div style={{marginLeft:"1.5rem"}}>
          <p>1 Item</p>
          <h3 style={{fontWeight:"bold"}}>$5061.11</h3>
        </div>
        <div className="btns">
          <Link to="/desktop4" style={{textDecoration:"none"}}>
          <Button variant="outlined">+ ADD MORE</Button></Link>
          <Link to="/"style={{textDecoration:"none"}}>
          <Button onClick={handleSubmit} style={{backgroundColor:"brown"}} variant="contained">PLACE ORDER</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Desktop5;
