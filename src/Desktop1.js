import React, { useState, useEffect } from "react";
import "./Desktop1.css";
import { Link } from "react-router-dom";
import ActiveCarts from "./ActiveCarts";
import { Button } from "@mui/material";
import data from "./data";
function Desktop1() {
  const [archieved, setIsArchieved] = useState(false);
  //archive function
  const handleArchieve = () => {
    if (archieved == false) {
      setIsArchieved(true);
    }
  };

  return (
    <>
      <div className="desktop1">
        {/* desktop1__topbar */}
        <div className="desktop1__topbar">
          <h3 style={{ borderBottom: "4px solid yellow" }}>Carts</h3>
          <Link className="underline" to="/Favourites">
            <h3 className="fav" style={{ color: "white" }}>
              Favourites
            </h3>
          </Link>
        </div>

        {/* desktop1__secondaryHeader */}
        <div className="desktop1__secondaryHeader">
          <div className="desktop1__secondaryHeader__left">
            <h3 style={{ borderBottom: "5px solid #34495E" }}>Active carts</h3>
            <h3
              className="desktop1__secondaryHeader__left__archieve"
              onClick={() => handleArchieve()}
            >
              Archieved carts
            </h3>
          </div>
          <div className="desktop1__secondaryHeader__right">
            <input type="text" placeholder="Search     🔍" />
            <select value="name">
              <option name="Filter1" id="filter1">
                filter 1
              </option>
              <option name="Filter2" id="filter2">
                filter 2
              </option>
              <option name="Filter3" id="filter3">
                filter 3
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* active cards list */}
      {!archieved && <ActiveCarts />}

      {/* archeved empty tect shower */}
      {archieved && (
        <div style={{ marginLeft: "1rem" }}>
          <h3>No archieved list here</h3>
          <Link to="/desktop2" style={{textDecoration:"none"}}>
            <Button variant="contained">Go back</Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Desktop1;
