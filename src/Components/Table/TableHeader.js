import React        from 'react';
import PropTypes    from 'prop-types';
import update       from 'immutability-helper';

import './Table.css';

const UP   = 'up';
const DOWN = 'down';
const DIRECTION = { UP, DOWN };

class TableHeader extends React.Component {

  static defaultProps = {
    defaultSortColumnIndex: 0,
    defaultSortDirection: DIRECTION.DOWN,
  }

  static propTypes = {
    children: PropTypes.node,
    onSort: PropTypes.func,
    defaultSortColumnIndex: PropTypes.number,
    defaultSortDirection: PropTypes.oneOf(Object.values(DIRECTION)),
  }

  constructor(props) {
    super(props);

    this.state = {
      sortColumnIndex: props.defaultSortColumnIndex,
      sortDirection: props.defaultSortDirection
    };
  }

  _onSort(index) {

    const { sortDirection, sortColumnIndex } = this.state;

    const newDirection = (sortDirection === DIRECTION.UP || sortColumnIndex !== index) ? DIRECTION.DOWN : DIRECTION.UP ;

    this.setState(update(this.state, {

      sortDirection: { $set: newDirection },
      sortColumnIndex: { $set: index }
    }), () => this.props.onSort(index, newDirection));
  }


  render() {
    const { children } = this.props;
    // const { sortDirection, sortColumnIndex } = this.state;

    return (
      <div className="header">
        <div className="headerRow">
          {React.Children.map(children, (child, index) => {
            if (child) {
              const childOptions = {
                onClick: () => { this._onSort(index); },
                // tmp commented for more research in the future
                // isSortSelected: (sortColumnIndex === index) ? true : false,
                // sortDirection: (sortColumnIndex === index) ? sortDirection : undefined,
                isSortSelected: child.props.isSortSelected ? true : false,
                sortDirection: child.props.sortDirection,
              };
              return React.cloneElement(child, childOptions);
            }
          })}
        </div>
      </div>
    );
  }
}

export default TableHeader;
export { DIRECTION };
