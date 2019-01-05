import React, { Component } from "react";


export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onChangeSearch = (e) => {
    const { onChangeSearch } = this.props;
    this.setState({
      term: e.target.value
    });
    onChangeSearch(e.target.value)
  }

  render(){
    return(
      <div className="row-item">
        <div className="row-item-title">Hotel Name</div>
        <div className="search-input">
          <i className="fas fa-search"></i>
          <input 
            onChange={ this.onChangeSearch } 
            value={this.state.term} 
            type="text" 
            placeholder="Hotel Name"/>
        </div>
      </div>
    )
  }
}

