import * as types from '../actions/actiontypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  list: undefined,
  currentElement: undefined,
  loading: true,
});

export function appState(state = initialState, action = {}) {

  switch (action.type) {

    case types.ELEMENT_CHANGED:
      return state.merge({
        currentElement: action.currentElement,
      });

    case types.GET_LIST:
      return state.merge({
        list: action.list,
        currentElement: action.currentElement,
        loading: action.loading,
      });

    default:
      return state;
  }
}
