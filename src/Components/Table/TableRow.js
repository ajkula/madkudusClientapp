import React      from 'react';
import PropTypes  from 'prop-types';

import './Table.css';

class TableRow extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    active: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    if (typeof this.props.onClick === "function") { this.props.onClick(e) }
  }

  render() {

    const { children, active } = this.props;

    let classNames = [...new Set(["row"])];

    if (active) {
      classNames.push("active");
    }


    return (
      <div onClick={this._onClick} className={classNames.join(' ')}>{children}</div>
    );
  }
}

export default TableRow;
