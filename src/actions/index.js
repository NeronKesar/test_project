import * as types from './actiontypes';

export const changeElement = element => {
  return dispatch => {
    dispatch({
      type: types.ELEMENT_CHANGED,
      currentElement: element,
    })
  }
};
