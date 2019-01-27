import React                from 'react';
import PropTypes            from 'prop-types';

import './styles.css';


const ContentWrapper = ({ children }) => {

  return (
    <div className="contentWrapper">
      <div className="containerLimited">{children}</div>
    </div>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentWrapper;