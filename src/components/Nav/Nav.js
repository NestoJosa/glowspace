// Nav.js

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { HamburgerSqueeze as NavBurger } from 'react-animated-burgers'

const Nav = props => {
  // the open/close menu toggler
  const listClassToggler = props.isOpen ? " Nav__list--open" : "";

  return(

    <div
      className="Nav Nav--horizontal">

        <Link
          className="Nav__logo"
          to="/glowspace"
          onClick={props.onLogoClick}>
            <Logo style={{ height: "50px" }} />
        </Link>

        <NavBurger
          className="Nav__burger"
          isActive={props.isOpen} 
          barColor="white"
          toggleButton={props.onClick}
          buttonStyle={{ padding: "0" }}
          buttonWidth={36}
        />

        <ul className={"Nav__list" + listClassToggler}>
          <li className="Nav__listItem">
            <Link 
              to="/glowspace" 
              onClick={props.onClick}
              className="Nav__link"> 
                <span className="Nav__listItemLabel">Forside</span>
                <i className="material-icons-round md-24 md-light">home</i>
            </Link>
          </li>
          <li className="Nav__listItem">
            <Link
              to="/about"
              onClick={props.onClick}
              className="Nav__link">
              <span className="Nav__listItemLabel">Om os</span>
              <i className="material-icons-round md-24 md-light">groups</i>
            </Link>
          </li>
          <li className="Nav__listItem">
            <Link
              to="/partners"
              onClick={props.onClick}
              className="Nav__link">
              <span className="Nav__listItemLabel">Partners</span>
              <i className="material-icons-round md-24 md-light">add_business</i>
            </Link>
          </li>
        </ul>

    </div>
  )
}


export default Nav;