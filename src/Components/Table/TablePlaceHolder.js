import React      from 'react';
import PropTypes  from 'prop-types';

import './Table.css';


const TablePlaceHolder = ({ children }) => {
  return (
    <div className="placeholder">{children}</div>
  );
};

TablePlaceHolder.propTypes = {
  children: PropTypes.node,
};

export default TablePlaceHolder;
