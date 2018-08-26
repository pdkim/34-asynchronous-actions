import superagent from 'superagent';

const url = 'https://internets-of-thing-api.herokuapp.com/api/v1/things';

export function addThing(thing) {
  return {
    type: 'Thing/ADD',
    payload: thing,
  };
}

export function addThings(things) {

  return {
    type: 'Thing/ADD_ALL',
    payload: things,
  };
}

export function deleteThing(thing) {
  
  return {
    type: 'Thing/DELETE',
    payload: thing,
  };
}


export function updateThing(thing) {

  return {
    type: 'Thing/UPDATE',
    payload: thing,
  };
}



export function fetchThings() {

  return dispatch => {

    return superagent.get(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (things) {

        dispatch(addThings(things));

      });

  };
}

export function addThunk(thing) {

  return dispatch => {

    return superagent.post(url)
      .send(thing)
      .then(response => {
        return response.body;
      })
      .then(thing => {
        return dispatch(addThing(thing));
      });
  };
}

export function updateThunk(thing) {
  
  return dispatch => {

    return superagent.put(`${url}/${thing.id}`)
      .send(thing)
      .then(response => {
        return response.body;
      })
      .then(thing => {
        dispatch(updateThing(thing));
      });
  };
}

export function deleteThunk(thing) {

  return dispatch => {

    return superagent.delete(`${url}/${thing.id}`)
      .then(response => {
        return response.text;
      })
      .then(() => {
        dispatch(deleteThing(thing));
      });
  };
}