import React, { useState } from 'react'

import './Header.css'
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from '@material-ui/icons/SearchSharp'
import VideoCallIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/AppsSharp";
import NotificationsIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar"
import white_logo from "../assets/yt_logo_rgb_light.png";


function Header() {
  const [searchIsHover, setSearchIsHover] = useState(false)

  return (
    <div className="nav">
      <div className="nav-leftbar">
        <button className="nav-burger-button">
          <MenuSharpIcon className="" />
        </button>
        <img className="nav-logo" src={white_logo} alt="logo" />
      </div>
      <div className="space" />
      <div className="nav-search">
        <input type="text" placeholder="Search" />
        <button
          className="nav-searchIcon-button"
          onMouseOver={() => setSearchIsHover(true)}
          onMouseOut={() => setSearchIsHover(false)}
        >
          {searchIsHover ? (
            <SearchIcon style={{ fontSize: "20px", color: "black" }} />
          ) : (
            <SearchIcon style={{ fontSize: "20px", color: "#aeaeae" }} />
          )}
        </button>
        {searchIsHover && (
          <div
            style={{
              position: "absolute",
              fontSize: "13px",
              marginTop: "40px",
              left: "60%",
              right:'0',
              width:'40px',
              padding: "9px",
              backgroundColor: "#0000007c",
              color: "white",
            }}
          >
            Search
          </div>
        )}
      </div>
      <div className="space" />
      <div className="nav-rightbar">
        <div className="nav-createIcon">
          <VideoCallIcon />
        </div>
        <div className="nav-apps">
          <AppsIcon />
        </div>
        <div className="nav-notifications">
          <NotificationsIcon />
        </div>

        <div className="nav-singIn">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
