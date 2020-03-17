import {
    DELETE_MOVIE,
    EDIT_MOVIE,
    ADD_MOVIE,
    GET_MOVIE_DESCRIPTION
  } from '../Constants/actions-types';
  import { v4 as uuidv4 } from 'uuid';

  export const addNewMovie = payload=> ({
    
    type: ADD_MOVIE,
    payload:{
    ...payload,
    id:uuidv4()
    }
    
  }
  );

  export const handleEdit = payload => ({
    type: EDIT_MOVIE,
     payload
    
  });

  export const handlDelete = id => ({
    type: DELETE_MOVIE,
    id
  });

