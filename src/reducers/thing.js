const initialState = [];


export default function reducer(state = initialState, action) {

  let {type, payload} = action;

  switch (type) {

  case 'Thing/ADD': return [...state, ...payload];

  case 'Thing/ADD_ALL': return [...state, ...action.payload];

  case 'Thing/UPDATE': return state.map(thing => thing.id === payload.id ? payload : thing);

  case 'Thing/DELETE' : return state.filter(thing => thing.id !== payload.id);
  
  default: return state;
  }
}