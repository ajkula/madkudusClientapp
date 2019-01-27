import React      from 'react';
// import PropTypes  from 'prop-types';
import './styles.css';
import cercle     from '../../Images/Cercle.PNG'


const Loader = () => (
    <div className="loaderContainer">
      <img src={cercle} alt="loading" className="rotate" />
    </div>
  );
  
export default Loader;
  