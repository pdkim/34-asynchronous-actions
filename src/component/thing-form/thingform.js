import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addThunk} from '../../actions/thing-action.js';

class ThingForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }
  

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.props.thing) {
      let newThing = {...this.state, id: this.props.thing.id, editing: false};
      this.props.onComplete(newThing);
    } else {
      this.props.onComplete(this.state);
    }
    this.setState({
      name: '',
    });
  }

  handleChange = (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const changed = {
      name: val,
    };

    this.setState(changed);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label>
          Name:
          <br/>
          <input type="text" placeholder="Enter name" value={this.state.name} />
        </label>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addThunk: thing => dispatch(addThunk(thing)),
});

export default connect(null, mapDispatchToProps)(ThingForm);