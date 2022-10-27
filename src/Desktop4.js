import React from "react";
import "./Desktop4.css";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Button } from "@mui/material";

function Desktop4() {
  return (
    <div className="desktop4">
      <div className="Desktop4__content">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="Desktop4__left" style={{ color: "white" }}>
            <KeyboardBackspaceIcon />
            <h5>
              Configure a new door{" "}
              <span style={{ color: "#E4E4E4" }}>2 of 3</span>
            </h5>
          </div>
        </Link>
        <div className="Desktop4__left">
          <MoreVertIcon />
        </div>
      </div>
      <div className="desktop4__boxes">
        <div className="desktop4__firstbox">
          <h4>Layout Options</h4>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Assembly Type</label>
            <select name="color" id="windcode">
              <option value="color">Complete Door</option>
              <option value="color">2</option>
            </select>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Windcode</label>
            <select name="color" id="windcode">
              <option value="color">WindCode W1</option>
              <option value="color">2</option>
            </select>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Design</label>
            <select name="color" id="design">
              <option value="color">CC</option>
              <option value="color">2</option>
            </select>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Color</label>
            <select name="color" id="color">
              <option value="color">Dark Finish</option>
              <option value="color">2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="desktop4__boxes">
        <div className="desktop4__firstbox">
          <h4>window Options</h4>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Glass type</label>
            <select name="color" id="windcode">
              <option value="color">dkdk</option>
              <option value="color">2</option>
            </select>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Section Glazed</label>
            <select name="color" id="windcode">
              <option value="color">WindCode W1</option>
              <option value="color">2</option>
            </select>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Framing</label>
            <select name="color" id="design">
              <option value="color">CC</option>
              <option value="color">2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="desktop4__boxes">
        <div className="desktop4__firstbox">
          <h4>Track Options</h4>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Spring</label>
            <select name="color" id="windcode">
              <option value="color">Complete Door</option>
              <option value="color">2</option>
            </select>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Track Size</label>
            <select name="color" id="windcode">
              <option value="color">WindCode W1</option>
              <option value="color">2</option>
            </select>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Track Mount</label>
            <select name="color" id="design">
              <option value="color">CC</option>
              <option value="color">2</option>
            </select>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Track Lift</label>
            <select name="color" id="color">
              <option value="color">Dark Finish</option>
              <option value="color">2</option>
            </select>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Track Radius</label>
            <select name="color" id="color">
              <option value="color">Dark Finish</option>
              <option value="color">2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="desktop4__boxes">
        <div className="desktop4__firstbox">
          <h4>Other Options</h4>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Lock</label>
            <select name="color" id="windcode">
              <option value="color">inside lock(#2)</option>
              <option value="color">2</option>
            </select>
            <label for="lock">MISC Lock Options</label>
            <div className="lockFlex">
              <input type="radio" name="lock" id="lock" />
              <p>No Lock Hole</p>
            </div>
          </div>
          <div className="desktop4__assemblytype">
            <label for="assembly type">Packaging</label>
            <select name="color" id="windcode">
              <option value="color">(X)distributor</option>
              <option value="color">2</option>
            </select>
          </div>
          <p
            style={{
              marginLeft: "40%",
              fontSize: "11px",
              color: "red",
            }}
          >
            ❗Clopay CWD Models Excludes Packaging Options
          </p>
          <div style={{ display: "flex" }}>
            <Link  to='/Desktop5' style={{textDecoration:'none'}}>
              <Button style={{ marginRight: "1rem" }} variant="outlined">
                PREVIEW
              </Button>
            </Link>
            <Button style={{ backgroundColor: "brown" }} variant="contained">
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop4;
