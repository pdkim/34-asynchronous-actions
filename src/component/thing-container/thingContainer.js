import React, {Component, Fragment} from 'react';
import ThingItem from '../thing-item/thingItem.js';
import {connect} from 'react-redux';

import {addThunk, updateThunk, deleteThunk, fetchThings} from '../../actions/thing-action.js';

import ThingForm from '../thing-form/thingform.js';

class ThingContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchThings();
  }

  render() {
    return (
      <Fragment>
        <h2>Make something</h2>
        <ThingForm onComplete={this.props.addThunk} />
        <ul>
          {this.props.things.map(thing => <ThingItem key={thing.id} thing={thing} onComplete={this.props.updateThunk} deleteThis={this.props.deleteThunk}/>)}
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {things: state.thingState}
};

const mapDispatchToProps = dispatch => ({
  fetchThings: () => dispatch(fetchThings()),
  addThunk: thing => dispatch(addThunk(thing)),
  updateThunk: thing => dispatch(updateThunk(thing)),
  deleteThunk: thing => dispatch(deleteThunk(thing))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThingContainer);