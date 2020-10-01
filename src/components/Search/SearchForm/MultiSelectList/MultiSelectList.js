// MultiSelectList.js
import React from 'react';
import './MultiSelectList.scss';

const MultiSelectList = props => {
  // let handleClick = (label) => props.onClick(label);
  // loop through the passed list of treatment labels
  // in order to create a list of treatment-check-buttons
  const treatAreaCheckButtons = props.labelIsActivePairs.map( (currPair) => {
    const currLabel = currPair[0];
    const currIsActive = currPair[1]; 
    const toggleNotActiveModifier = currIsActive ? " MultiSelectList__item--active" : '';
    return(
      <li 
        className={"MultiSelectList__item" + toggleNotActiveModifier} 
        key={'key-for-' + currLabel}
      >
        <button 
          className="MultiSelectList__button" 
          onClick={ () => props.onClick(currLabel) }
        >
          <div className="MultiSelectList__buttonInnerWrapper">
            <span className="MultiSelectList__label">
              {currLabel}
            </span>
            <span className="MultiSelectList__checkbox">
              <i className="MultiSelectList__checkmark"></i>
            </span>
          </div>
        </button>
    </li> 
    )
  });

  return(
    <ul className="MultiSelectList">
      {treatAreaCheckButtons}                 
    </ul> 
  )
}

export default MultiSelectList;