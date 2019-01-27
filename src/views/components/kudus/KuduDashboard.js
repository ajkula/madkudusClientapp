import React                        from 'react';
import { connect }                  from "react-redux";
import Loader                       from '../../../Components/Loader'
import Dashboard                    from './dashboard/Dashboard';
import Controls                     from './dashboard/Controls';

class KuduListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log(this.props);
    const { kudus } = this.props;

    if (kudus.isFetching) {
      return (
        <Loader />
      );
    }

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexWrap: "nowrap",
      }}>
        <div>
          <Controls />
        </div>
        <div style={{"height": "400px", "width": "550px"}}>
          <Dashboard />
        </div>
      </div>
    )};
};

const mapStateToProps = (state) => {
  return {
    kudus: state.kudus.kuduList,
  };
};

export default connect(mapStateToProps, {  })(KuduListComponent);