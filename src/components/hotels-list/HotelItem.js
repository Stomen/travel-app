import React from "react";

const HotelItem = ({img, name, rate, price}) => {
  return(
    <div className="content-item">
        <div className="img-wrap tag">
          <img src={img} alt=""/>
          <span>Save 13%</span>
        </div>
        <div className="info-wrap">
          <span className="info-name">{name}</span>
          <span className="info-distance"><strong>0.2 mi</strong> from center</span>
          <div className={`rait-wrap has-stars-${rate}`}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="price-wrap">
          <span>${price}</span>
          <button className="orange-btn">View Deal</button>
        </div>
      </div>
  );
}
export default HotelItem;