import React, { useContext } from 'react';
import  "./Search.css";
import PriceDropDown from "./PriceDropDown";
import CityDropDown from './CityDropDown';
import MoveinDropDown from "./MoveinDropDown";
import PropertyDropDown from "./PropertyDropDown";
import {
    SearchRounded,
  } from "@mui/icons-material";


function Search() {

  return (
  <div className="dropdown">
    <PriceDropDown/>
    <CityDropDown/>
    <PropertyDropDown/>
    <MoveinDropDown/>
    <button className='ttt'> 
        <SearchRounded className='tt'/>
    </button>
  </div>
  );
};

export default Search;