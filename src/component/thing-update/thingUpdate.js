import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateThunk} from '../../actions/thing-action.js';

class ThingUpdateForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {...this.props.thing};
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onDone();
    this.props.updateThing(this.state);
  }

  onCancel = () => this.props.onCancel();

  onChange = e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({...this.state, name: val});
  }


  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="name" placeholder="New name" value={this.state.name} />
        <button>Update</button>
        <button type="button" onClick={this.onCancel}>Cancel</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateThing: thing => dispatch(updateThunk(thing))
});

export default connect(null, mapDispatchToProps)(ThingUpdateForm);