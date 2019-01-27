import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import config      from './config'
import { connect } from 'react-redux';
import IndexKudus from './views/components/kudus';
import NavMenu       from './views/components/NavMenu';

const routes = [
  {
    route:     config.path.kudus,
    component: IndexKudus,
  },
  {
    route:     config.path.stats,
    component: IndexKudus,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    console.log("App Constructor props:", props)
    // props.history.listen((location) => {
    //   props.changeLocation(location);
    //   console.log(location.pathname);
    // });
  }

  componentDidMount() {
    // call default function to display redux operation
    // this.props.defaultFunction();
  }

  render() {
    const redirectTo = config.path.kudus;

    return (
    <div className="ligne">
    <div className="side">
      <NavMenu className="navbar" />
    </div>
    <div className="main">
      <Switch>
        {routes.map( (item, key)=>{
          console.log({item: item, key:key})
          return (
            <Route key={key} path={item.route} component={item.component}/>
          );
        })}
        <Redirect from="/" to={redirectTo} />
      </Switch>
      </div>
      </div>
    )
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default withRouter(connect(mapStateToProps, {  })(App));
