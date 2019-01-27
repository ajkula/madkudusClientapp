import React      from 'react';
import PropTypes  from 'prop-types';

import './Table.css';

const TableCell = ({ children, legend, fixedRight, number, custom, customClasses }) => {

  const classNames = [...new Set(["cell" ,...customClasses])];

  let hasTitle = false;
  let hasTitleLegend = false;

  if (typeof(children) === 'string' ){
    hasTitle = true;
  }

  if (typeof(legend) === 'string' ){
    hasTitleLegend = true;
  }

  if (fixedRight) {
    classNames.push("fixedRight");
  }

  if (number) {
    classNames.push("number");
  }

  if (custom) {
    return (<div className={classNames.join(' ')}>{children}</div>);
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="text" title={hasTitle ? children : null} >{children}</div>
      {legend && <div className="legend text" title={hasTitleLegend ? legend : null} >{legend}</div>}
    </div>
  );
};

TableCell.defaultProps = {
  legend:       null,
  custom:       false,
  fixedRight:   false,
  number:       false,
  customClasses:  [],
};

TableCell.propTypes = {
  children: PropTypes.node,
  legend: PropTypes.node,
  custom: PropTypes.bool.isRequired,
  fixedRight: PropTypes.bool.isRequired,
  number: PropTypes.bool.isRequired,
  customClasses: PropTypes.arrayOf(PropTypes.string),
};

export default TableCell;
