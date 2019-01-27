import React                from 'react';
import PropTypes            from 'prop-types';

import './styles.css';


const ListControlsWrapper = ({ children }) => {

  return (
    <div className="listControl">{children}</div>
  );
};

ListControlsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListControlsWrapper;