import React, { Component } from 'react';
// import logo from './logo.svg';
import * as main from './App.css';

import { connect } from 'react-redux';
import { defaultFunction } from './Modules/Exemple/Actions';
import SimpleComponent from './views/components/simple-component';

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
      <div className={main.flexContainer}>
        <div>
        </div>
        <div>
          React Redux Starter Template
          <SimpleComponent />
        </div>
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
