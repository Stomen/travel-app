import React, {Component} from "react";

export default class HotelItem extends Component {
  
  state = {
    visibleContent: false
  }

  onHandlerChange = () =>{
    console.log(this.state.visibleContent);
    this.setState({
      visibleContent : !this.state.visibleContent
    })
  }
  render(){
    const { img, name, rate, price, address, location, description } = this.props.item;

    const visibleClass = this.state.visibleContent ? "open":"";

    return(
      <React.Fragment>
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
            <span>${price.single}</span>
            <button onClick={this.onHandlerChange} className="orange-btn">View Deal</button>
          </div>
        </div>
         <div className={`content-hiden-element ${visibleClass}`}>
          <div className="title-items">Adress</div>
          <div className="content-info">{description}</div>
          <div className="title-items">Description</div>
          <div className="content-info">{address}</div>
          <div className="title-items">Location</div>
          <div className="content-info">{`lat - ${location.lat} , lon - ${location.lon}`}</div>
          <div className="title-items">Prices</div>
          <div className="content-info">
            <ul>
              <li>{`Single - $${price.single}`}</li>
              <li>{`Double - $${price.double}`}</li>
              <li>{`Twin - $${price.twin}`}</li>
            </ul>
          </div>
         </div>
      </React.Fragment>
    );
  }
}