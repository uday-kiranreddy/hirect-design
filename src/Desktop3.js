import React from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Desktop3.css";
import { Button } from "@mui/material";
function Desktop3() {
  return (
    <div className="desktop3">
      <div className="Desktop3__content">
        <Link to="/desktop2" style={{ textDecoration: "none" }}>
          <div className="Desktop3__left" style={{ color: "white" }}>
            <KeyboardBackspaceIcon />
            <h5>
              Configure a new door{" "}
              <span style={{ color: "#E4E4E4" }}>2 of 3</span>
            </h5>
          </div>
        </Link>
        <div className="Desktop3__left">
          <MoreVertIcon />
        </div>
      </div>
      <div className="desktop3__whitebox">
        <div className="desktop3__dropbars">
          <div>
            <label for="Select Category">Select Category </label>
            <select name="category" id="category">
              <option value="volvo">residential door</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div>
            <label for="Select Series">Select Series </label>
            <select name="series" id="series">
              <option value="volvo">Canyon Ridge @ Collection</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div>
            <label for="Door Type">Door Type </label>
            <select name="doortype" id="doortype">
              <option value="volvo">CAN212</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <Link to="/Desktop4" style={{textDecoration:"none"}}>
          <Button style={{float:"right",marginTop:"90%",backgroundColor:"brown",marginBottom:"20%"}} variant="contained">Configure</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Desktop3;
