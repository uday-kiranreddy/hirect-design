import { Avatar } from "@mui/material";
import React from "react";
import './Navbar.css';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import HelpIcon from '@mui/icons-material/Help';
function Navbar() {
  return (
    <div className="nav">
      <div className="nav__left">
        <Avatar
          src={
            "https://media.istockphoto.com/photos/letter-f-made-of-chocolate-coated-beans-chocolate-candies-alphabet-f-picture-id1372612321?b=1&k=20&m=1372612321&s=170667a&w=0&h=iJwZgXC83FDK5oxLuHo4Sc7l306Gabh4ppsPsV292C4="
          }
        />
        <h4>Studioz</h4>
      </div>
      <div className="nav__right">
         <AppsIcon/>
         <NotificationImportantIcon />
         <HelpIcon />
         <Avatar src={"https://cdn.pixabay.com/photo/2016/01/26/18/35/dog-1163076__340.jpg"}/>
      </div>
    </div>
  );
}

export default Navbar;
