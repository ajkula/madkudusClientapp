import React          from 'react';
import PropTypes      from 'prop-types';

import { DIRECTION }  from './TableHeader';
import './Table.css';


class TableHeaderCell extends React.Component {

  static defaultProps = {
    sortable: false,
    fixedRight: false,
    isSortSelected: false,
    number: false,
    sortDirection: DIRECTION.DOWN,
    customClasses: [],
  }

  static propTypes = {
    children: PropTypes.node,
    sortable: PropTypes.bool.isRequired,
    fixedRight: PropTypes.bool.isRequired,
    number: PropTypes.bool.isRequired,
    isSortSelected: PropTypes.bool.isRequired,
    sortDirection: PropTypes.oneOf(Object.values(DIRECTION)),
    onClick: PropTypes.func,
    customClasses: PropTypes.arrayOf(PropTypes.string),
  }

  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.ref.blur();
    this.props.onClick();
  }

  render() {

    const { children, sortable, fixedRight, number, isSortSelected, sortDirection, customClasses } = this.props;

    const classNames = [...new Set(["headerCell" ,...customClasses])];
    this.iconName = "sort";

    if(fixedRight) {
      classNames.push("headerCellFixedRight");
    }

    if(number) {
      classNames.push("number");
    }

    if(!sortable) {
      return (
        <div className={classNames.join(' ')}>{children}</div>
      );
    }

    classNames.push("sortable");

    if(isSortSelected) {
      classNames.push("sortSelected");
      switch(sortDirection) {
        case DIRECTION.UP: classNames.push("up"); this.iconName = "sort-up";  break;
        case DIRECTION.DOWN: classNames.push("down"); this.iconName = "sort-down"; break;
      }
    }

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div
        className={classNames.join(' ')}
        onClick={this._onClick}
        ref={(ref) => { this.ref = ref; }}
      >
        <div className="headerIconWrapper">
          <span>{children}</span>
          {/* <Icon name={this.iconName} /> */}
        </div>
      </div>
    );
  }
}

export default TableHeaderCell;
