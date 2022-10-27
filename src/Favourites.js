import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Favourites() {
  return (
    <div
      className="favourites"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <h1>Nothing here</h1>
      <h4>Add favourites to view here</h4>
      <Link to='/'  style={{textDecoration:"none"}}>
        <Button variant="contained">Go Back</Button>
      </Link>
    </div>
  );
}

export default Favourites;
