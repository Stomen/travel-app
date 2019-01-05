import React, { Component } from "react";
import StarsRatings from "../left-bar/stars-ratings/StarsRatings";
import SearchPanel from "../left-bar/search-panel/SearchPanel";
import FreebiesItems from "../left-bar/freebies-items/FreebiesItems";

import "./index.scss";

export default class LeftBar extends Component{

  onChangeSearch = (term) => {
    const { onChangeSearch } = this.props;
    onChangeSearch(term);
  }
  onCheckedFreebies = (check) => {
    const { onFreebiesCheck } = this.props;
    onFreebiesCheck(check);
  }
  onChangeStar = (name) => {
    const { changeStarFiltr } = this.props;
    changeStarFiltr(name);
  }

  render(){
    const { poolCount, starState } = this.props;
    return(
      <div className="left-bar">
          <StarsRatings onChangeStar={this.onChangeStar} starState={ starState }  />
          <FreebiesItems poolCount={poolCount} onCheckedFreebies={this.onCheckedFreebies} />
          <SearchPanel onChangeSearch={this.onChangeSearch}/>
      </div>
    )
  }
}