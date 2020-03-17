
import {
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE,
    GET_MOVIE_DESCRIPTION
  } from '../Constants/actions-types';
  import {movies} from "../../component/data"



  const InitialState = {movies}

const movieReducer = (state = InitialState, { type, payload, id }) => {
      switch (type) {
          case ADD_MOVIE:
          
            return {
              ...state,
              movies: [...state.movies, payload ]
                //this payload is obj {} full of the info from modal
              }
              
              ;
             
          case DELETE_MOVIE:

            return {
                ...state,
                movies: state.movies.filter(el => el.id !== id)
                //this payload is full of the id from the click of the movie delete btn 
            };
              case EDIT_MOVIE:

                return {
                    ...state,
                    movies: state.movies.map(el => el.id === payload.id ? payload: el
                        //this payload is and obj with the id of the movie that we want to change and the rest of the new info from modal 
                    )
                  };
          default:

              return state
         
      }
  }

  export default movieReducer;