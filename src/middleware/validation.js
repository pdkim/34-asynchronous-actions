
export const validate = store => next => action => {
  if(action.type === 'Thing/UPDATE' && !action.payload.name) {
    console.log('action payload', action.payload);
    alert('Please enter a valid name to update');
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