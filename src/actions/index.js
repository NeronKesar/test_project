import * as types from './actiontypes';
import { getMoviesFromApi } from '../api'

export const changeElement = element => {
  return dispatch => {
    dispatch({
      type: types.ELEMENT_CHANGED,
      currentElement: element,
    })
  }
};

export const getList = () => {
  return dispatch => {
    new Promise(resolve => resolve(getMoviesFromApi()))
      .then(data => {
        dispatch({
          type: types.GET_LIST,
          list: data,
          currentElement: data[0],
          loading: false,
        });
      })
  }
};
