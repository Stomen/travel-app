import React from "react";

const FreeItem = ({label,count,name, onChecked}) => {
  const onHandleCheck = (e) => {
    onChecked(e.target.checked);
  }
  return(
    <div className="freebies-wrap">
        <div className="freebies-item">
          <input type="checkbox" 
            onChange={onHandleCheck}  
            id={name} 
            name={name}/>
          <label 
            className="ellipsis" 
            htmlFor={name}>{label}</label>
          <span className="ellipsis">{count}</span>
        </div>
      </div>
  )
}
export default FreeItem;