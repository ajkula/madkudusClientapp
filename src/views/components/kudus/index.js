import PropTypes                    from "prop-types";
import React                        from 'react';
// import { injectIntl, intlShape }    from 'react-intl';
import { connect }                    from "react-redux";
import { Switch, Route, Redirect }  from 'react-router-dom';
import config                       from '../../../config';
import KuduListComponent         from '../../../views/components/kudus/KuduList'
import KuduDashboardComponent         from '../../../views/components/kudus/KuduDashboard'
import { fetchAllKudus }         from '../../../Modules/Kudus/actions';

class IndexKudus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.props.fetchAllKudus();
  }

  render() {
    console.log(this.props);

  return (
    <div>
      <Switch>
        <Route exact path={config.path.kudus} component={KuduListComponent} />
        <Route exact path={config.path.stats} component={KuduDashboardComponent} />
        <Redirect to={config.path.kudus} />
      </Switch>
    </div>
    
  )};
};

IndexKudus.propTypes = {
  fetchAllKudus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    kudus: state.kudus.kuduList,
  };
};

export default connect(mapStateToProps, { fetchAllKudus })(IndexKudus);