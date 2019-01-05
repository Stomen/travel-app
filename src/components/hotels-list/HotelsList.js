import React, { Component } from "react";
import HotelItem from "./HotelItem";

import "./index.scss";

export default class HotelsList extends Component {
 render(){
   
  const { hotels } = this.props;

  const hotelsResult = hotels.map((item, key) => {
    

    return (
      <HotelItem 
        item={item} 
        key={key}
        />
    )
  });
  return(
    <div className="main-content">
          {hotelsResult}
      </div>
  )
 }
}


