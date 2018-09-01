import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../../lib/store/store.js';
import {BrowserRouter, Route} from 'react-router-dom';
import ThingContainer from '../thing-container/thingContainer.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route path='/' component={ThingContainer} />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;