import React from "react";
import FreeIrem from "./FreeItem";


const FreebiesItems = ({poolCount,onCheckedFreebies}) => {
  const onChecked = (check) => {
    onCheckedFreebies(check);
  }
  return(
    <div className="row-item">
      <div className="row-item-title">Freebies</div>
      <FreeIrem 
        label={"Has a Pool"} 
        count={poolCount} 
        name={"pool"} 
        onChecked={onChecked}/>
    </div>
  )
}
export default FreebiesItems;