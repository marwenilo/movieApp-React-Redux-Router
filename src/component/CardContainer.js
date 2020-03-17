import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "./CardList";
import NameFilter from "./NameFilter.js";
import Rate from "./Rating";
import Modal from "./Modal";
import { message } from "antd";




class CardContainer extends Component {

  state = {
    nameFilter: "",

    minRatingFilter: 0,

  };
 
  //

  handleSearch = input => {
    this.setState({
      nameFilter: input
    });
  };

  //

  error = name => {
    message.error(`You did deleted this movie : ${name}`);
  };

  //

  handleChange = newRating => {
    this.setState({
      minRatingFilter: newRating
    });
  };



  render() {
    
    const filtered = this.props.movies.filter(
      el =>
        el.star >= this.state.minRatingFilter &&
        el.name.toLowerCase().includes(this.state.nameFilter.toLowerCase())
    );

    return (

      <div className="cardContainer">

        <div className="header">

          <NameFilter 
          handleSearch={this.handleSearch} 
          b={this.searchMovies} />
            
          <Modal/>

          <Rate
            minRate={this.state.minRatingFilter}
            handleRate={this.handleChange}
          />

        </div>

        <CardList
          movies={filtered}
          error={this.error}
        />

      </div>

    );
  }
}

const mapStateToProps = state => ({
  movies: state.movieReducer.movies,

});
export default connect(mapStateToProps)(CardContainer);
