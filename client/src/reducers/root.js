import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

export function rootReducer(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
