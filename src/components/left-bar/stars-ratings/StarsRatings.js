import React from "react";
import StarItem from "./StarItem";

const StarsRatings = ({starState, onChangeStar}) => {
  const HOTEL_STAR = [
    {
      name:"5",
      label:"5"
    },
    {
      name:"4",
      label:"4"
    },
    {
      name:"3",
      label:"3"
    },
    {
      name:"2",
      label:"2"
    },
    {
      name:"all",
      label:"0+"
    },
  ];
  const clickHendlerStar = (name) => {
    onChangeStar(name)
  }
  const starsList = HOTEL_STAR.map((item, key) => {
    const {name, label} = item;
    return (<StarItem 
              key={key} 
              clickHendlerStar={clickHendlerStar} 
              starState = {starState} 
              name={name} 
              label={label} 
              />)
  });
  return(
    <div className="row-item">
            <div className="row-item-title">Stars</div>
            <div className="stars-wrap">
              {starsList}
            </div>
          </div>
  )
}

export default StarsRatings;