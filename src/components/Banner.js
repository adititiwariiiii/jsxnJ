import React from "react";
import "./Banner.css";
import {} from "@mui/material";
import {
    SearchRounded,
  } from "@mui/icons-material";


function Banner() {
    return (
        <div className="bannerContent">
            <h1>
                Search properties to rent
            </h1>
            <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
        </div>

    );

}

export default Banner;