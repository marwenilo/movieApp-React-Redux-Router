import React, { Component } from "react";
import { connect } from "react-redux";



class Description extends Component {



  render() {
    if (!this.props.movies) {
      return (<p>there's no movie</p>) ;
    }
    const [movies] = this.props.movies.filter(
        el => el.id === this.props.match.params.id
      );
console.log(movies)
    return (
  
  
         <div>
         <h1>DESCRIPTION PAGE</h1>
         <h1>{movies.discription}</h1>
         </div> 
       
      
 
   
    );
  }
}


const mapStateToProps = state => ({
    movies: state.movieReducer.movies,
});

export default connect(mapStateToProps)(Description);