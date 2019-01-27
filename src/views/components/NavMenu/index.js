import React                      from 'react';
import './styles.css';
import config                     from '../../../config';
// import { connect }                from 'react-redux';
import { withRouter, NavLink }    from 'react-router-dom';
import cercleLogo                 from '../../../Images/Cercle.PNG'

const NavMenu = () => {
  return (
    <div >
      <div className="scrollWrapper">
        <div className="logoWrapper">
          <img className="logo" src={cercleLogo} alt="Cercle Logo" />
        </div>
        <ul className="mainNavWrapper">
          <li className="mainNavItem">
            <NavLink activeClassName="activeN" to={config.path.kudus}>
              <span>Kudus</span>
            </NavLink>
          </li>
          <li className="mainNavItem">
            <NavLink activeClassName="activeN" to={config.path.stats}>
              <span>Dashboard</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(NavMenu);