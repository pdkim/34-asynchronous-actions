import React, {Component, Fragment} from 'react';
import {Route, Link} from 'react-router-dom';

import ThingUpdateForm from '../thing-update/thingUpdate.js';

export default class ThingItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default',
    };
  }

  editMode = () => {
    this.setState({mode: 'edit'});
  }

  defaultMode = () => {
    this.setState({mode: 'default'});
  }

  render() {
    if(this.state.mode === 'default') {
      <li onDoubleClick={this.editMode}>
        <h2>{this.props.thing.name}</h2>
        <button onclick={() => this.props.deleteThis(this.props.thing)}>Delete</button>
      </li>
    } else {
      return (
        <Fragment>
          <ThingUpdateForm thing={this.props.thing} onCancel={this.defaultMode} OnDone={this.defaultMode} />
        </Fragment>
      )
    }
  }
}