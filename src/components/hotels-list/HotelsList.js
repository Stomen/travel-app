import React, { Component } from "react";
import HotelItem from "./HotelItem";

import "./index.scss";

export default class HotelsList extends Component {
 render(){
   
  const { hotels } = this.props;

  const hotelsResult = hotels.map((item, key) => {
    
    const {img, name, rate, price} = item;

    return (
      <HotelItem 
        img={img} 
        name={name} 
        rate={rate} 
        price={price.single} 
        key={key}/>
    )
  });
  return(
    <div className="main-content">
          {hotelsResult}
      </div>
  )
 }
}


