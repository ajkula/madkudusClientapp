import React      from 'react';
import PropTypes  from 'prop-types';
import './styles.css';

const Tooltip = ({ children, message }) => (
      <div className="tooltip">{children}
        <span className="tooltiptext">{message}</span>
      </div>
);

Tooltip.propTypes = {
  children: PropTypes.node,
};

export default Tooltip;