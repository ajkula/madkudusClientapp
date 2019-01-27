import React                        from 'react';
import { connect }                  from "react-redux";
import Loader                       from '../../../Components/Loader'
import List                         from './list/List';

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
      <List />
    )};
};

const mapStateToProps = (state) => {
  return {
    kudus: state.kudus.kuduList,
  };
};

export default connect(mapStateToProps, {  })(KuduListComponent);