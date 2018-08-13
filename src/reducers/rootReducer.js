import * as types from '../actions/actiontypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  currentElement: undefined,
});

export function appState(state = initialState, action = {}) {

  switch (action.type) {

    case types.ELEMENT_CHANGED:
      return state.merge({
        currentElement: action.currentElement,
      });

    default:
      return state;
  }
}
