// Dropdown.js

import React from 'react';
import './Dropdown.scss';

const Dropdown = props => {
  const classToggler = props.isActive ? ' Dropdown--active' : '';

  return(
    <div className={"Dropdown"  + classToggler}>
      <button 
        className="Dropdown__button"
        onClick={props.onClick}>
          <div className="Dropdown__buttonInnerWrapper">
            <span className="Dropdown__buttonLabel">{props.label}</span>
            <i className="Dropdown__buttonIcon"></i>
          </div>
      </button>
      <div className="Dropdown__bodyWrapper">
        <div className="Dropdown__body">
          {props.body}
        </div>
      </div>
    </div>
  )
}

export default Dropdown;