import React from "react";

const StarItem = ({label, name, clickHendlerStar ,starState }) => {
  const starClass = () => (starState === name ? "active":"");
  const hendlerSenderStar = () => {
    clickHendlerStar(name);
  }
  return(
    <i className={`far fa-star ${starClass()}`} 
      onClick={hendlerSenderStar} 
      name={name}>
      <span>{label}</span></i>
  )
}

export default StarItem;