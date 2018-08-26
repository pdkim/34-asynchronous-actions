export default () => next => action => {
  if(action.type === 'Thing/ADD') {
    if(action.payload.name === '') {
      alert('Requires a name');
    } else {
      return next(action);
    }
  } else {
    next(action);
  }
};