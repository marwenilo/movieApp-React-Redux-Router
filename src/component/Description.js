import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDescription } from "../Js/actions/actions";


class Description extends Component {
  componentDidMount() {
    this.props.getMovieDescription(this.props.match.params.id);
  }

  render() {
    if (!this.props.movies) {
      return (<p>there's no movie</p>) ;
    }
    const movies = this.props.movies
console.log(movies)
    return (
      <div>
      { movies.map((el,key)=>(
         <div key={key}>
         <h1>DESCRIPTION PAGE</h1>
         <h1>{el.discription}</h1>
         </div> 
      )) }
 
      </div>
    );
  }
}
// const mapDispatchToProps = dispatch => ({
//     getMovieDescription: id => dispatch(getMovieDescription(id))
// });

const mapStateToProps = state => ({
    movies: state.movieReducer.movies,
});

export default connect(mapStateToProps, {getMovieDescription})(Description);