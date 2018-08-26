import {Component} from 'react';

export default class ThingForm extends Component {
  state = {
    name: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.props.thing) {
      let newThing = {...state, id: this.props.thing.id, editing: false};
      this.props.onComplete(newThing);
    } else {
      this.props.onComplete(this.state);
    }
    this.setState({
      name: '',
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} placeholder="Enter name" onChange={this.handleChange} />
        </label>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
}