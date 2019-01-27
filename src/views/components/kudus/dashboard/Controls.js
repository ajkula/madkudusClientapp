import React                        from 'react';
import { connect }                  from "react-redux";
import '../list/styles.css';
import update                       from 'immutability-helper';
import { displayGroupChange }       from '../../../../Modules/Kudus/actions';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        group: props.kudus.controls.group,
        selectedGroup: props.kudus.controls.selectedGroup || "",
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleChange(event) {
    this.setState(update(this.state, {
      controls: {
        selectedGroup: {$set: event.target.value}
      }
    }), () => {
      console.log(this.state);
      this.props.displayGroupChange(this.state.controls);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.displayGroupChange(this.state.controls);
  }

  _renderOptions() {
  }

  render() {

    // controls: {
    //   group: [],
    //   selectedGroup: null,
    // },

    const options = this.state.controls.group.map((key, i) => {
      return (
        <option key={i} value={key.value}>{key.label}</option>
      )
    })

    return (
      <div>
        <label>
          key:
          <select value={this.state.controls.selectedGroup} onChange={this.handleChange}>
          {options}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    kudus: state.kudus.kuduList,
  };
};

export default connect(mapStateToProps, { displayGroupChange })(Controls);