import React      from 'react';
import PropTypes  from 'prop-types';

// import TableScrollable from './TableScrollable';
import './Table.css';


class Table extends React.Component {

  static defaultProps = {
    scrollableInBox: true,
    customClasses: [],
  }

  static propTypes = {
    children: PropTypes.node,
    scrollableInBox: PropTypes.bool,
    customClasses: PropTypes.arrayOf(PropTypes.string),
  }

  constructor(props) {
    super(props);
  }

  _renderTable() {
    const { children, customClasses } = this.props;
    const classNames = [...new Set(['dataTable' ,...customClasses])];

    return (
      <div className={classNames.join(' ')}>
        {children}
      </div>
    );
  }

  render() {
    // const { scrollableInBox } = this.props;

    // if(scrollableInBox) {
    //   return (
    //     <TableScrollable>
    //       { this._renderTable() }
    //       <div style={{height: '52px'}} />
    //     </TableScrollable>
    //   );
    // }

    return (
      <div className="scrolling-wrapper-flexbox">
        <div className="card">
        {this._renderTable()}
        </div>
      </div>
    )
  }
}

export default Table;
