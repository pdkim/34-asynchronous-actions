
export const validate = store => next => action => {
  if(action.type === 'Thing/ADD') {
    if(action.payload.name === '' || action.payload.name === null) {
      alert('Requires a name');
    } else {
      return next(action);
    }
  } else {
    next(action);
  }
};

export const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};