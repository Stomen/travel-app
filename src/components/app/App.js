import React, { Component } from "react";
import LeftBar from "../left-bar/LeftBar";
import HotelsList from "../hotels-list/HotelsList";
import { hotels } from "../../constants/mocks/hotels";
import "./index.scss";

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      hotels: hotels.hotels,
      searchTerm: "",
      freeFilt: false,
      starFilt: "all"
    }
  }

  onChangeSearch = (term) => {
    this.setState({
      searchTerm: term
    });
  }

  onFreebiesCheck = (check) => {
    this.setState({
      freeFilt: check
    });
  }
  freebiesFilter = (items, freeFilt) => {
    if(freeFilt === false){
      return items;
    }
    return items.filter((item) => {
      return item.hasPool === "true";
    });
  }

  searchFilter = (items, searchTerms) => {
    if(searchTerms.length === 0){
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerms.toLowerCase()) > -1;
    });
  }

  changeStarFiltr = (name) => {
    this.setState({
      starFilt: name
    });
  }
  starSearchFilter = (items, searchStars) => {
    if(searchStars === "all"){
      return items;
    }
    return items.filter((item) => {
      return item.rate === searchStars;
    });
  }
  
  render(){
    const {hotels, searchTerm, freeFilt, starFilt} = this.state;

    const visibilityItems = this.starSearchFilter(this.freebiesFilter(this.searchFilter(hotels, searchTerm), freeFilt),starFilt);
    const poolHotels = visibilityItems.filter( item => item.hasPool === "true" );
  
   return(
     <div className="main-wrap">
        <div className="container">
          <LeftBar 
              starState={ starFilt } 
              onChangeSearch={ this.onChangeSearch }  
              poolCount={ poolHotels.length } 
              onFreebiesCheck={ this.onFreebiesCheck} 
              changeStarFiltr = {this.changeStarFiltr}
              />
          <HotelsList 
              hotels={visibilityItems} 
              />
      </div>
     </div>
   )
  }
}

