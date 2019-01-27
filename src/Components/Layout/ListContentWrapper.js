import React                from 'react';
import PropTypes            from 'prop-types';


const ListContentWrapper = ({ children }) => {

  return (
    <div>{children}</div>
  );
};

ListContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListContentWrapper;