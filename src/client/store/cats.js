import axios from 'axios';

// ACTION TYPES
// YOU MAKE THEM!!
const LOAD_CATS = 'LOAD_CATS';

// INITIAL STATE
// what would be a good initial state?
// :thinking:
const initialState = [];

// ACTION CREATORS
export const loadCats = data => ({
  // some stuff might go in here? hmmmmm.....
  type: LOAD_CATS,
  cats: data
});

// THUNK CREATORS
export const fetchCats = () => {
  return async dispatch => {
    const cats = (await axios.get('/api/cats/')).data;
    dispatch(loadCats(cats));
  };
};

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATS:
      return action.cats;
    default:
      return state;
  }
}
