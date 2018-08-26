import {Component} from 'react';
import {connect} from 'react-redux';
import {thingUpdate} from '../../actions/thing-action.js';

class ThingUpdateForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {...props.things};
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onDone();
    this.props.thingUpdate(this.state);
  }

  onCancel = () => this.props.onCancel();

  onChange = e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const changed = {
      [e.target.name]: val,
    };
    this.setState(changed);
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
  thingUpdate: thing => dispatch(thingUpdate(thing))
});

export default connect(null, mapDispatchToProps)(ThingUpdateForm);