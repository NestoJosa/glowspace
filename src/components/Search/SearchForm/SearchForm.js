// SearchForm.js

import React from 'react';
import DropdownContainer from './Dropdown/DropdownContainer'; 
import MultiSelectList from './MultiSelectList/MultiSelectList';
import DateRangePicker from './DateRangePicker/DateRangePicker';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'



const SearchForm = props => { 
  // create the treatment-area-icon-buttons
  const treatmentAreaIconButtons = props.treatAreaAndIsActivePairs.map( (currPair, i) => {
    const treatmentArea = currPair[0];
    const isActive = currPair[1]; 
    const toggleIsActiveModifier = isActive ? '' : ' SearchForm__treatAreaIconBtn--notActive';
    return (
      <li key={treatmentArea + i}>
        <button
          className={"SearchForm__treatAreaIconBtn" + toggleIsActiveModifier}
          onClick={ () => props.onClick(treatmentArea)}>
          <img           
            src={props.treatAreaIcons[i]} 
            alt={treatmentArea} />
          <span className="SearchForm__treatAreaIconBtnLabel">{treatmentArea}</span>
        </button>  
      </li>
    );
  });

  let isLoadingModifierToggler = props.isLoading ? 
    ' SearchForm--loading' :
    '';

  let animatedLoadingIcon = props.isLoading ?
    <Loader
      type="TailSpin"
      color="black"
      height={30}
      width={50}
    /> : 'Submit'
  ;
    
  return(
    <div className={"SearchForm" + isLoadingModifierToggler}>
      
      <ul className="SearchForm__treatAreaIconBtnList">
        {treatmentAreaIconButtons}
      </ul>
      <div className="SearchForm__treatmentAreasDrowdown">
        <DropdownContainer 
          label={props.treatAreaDropdownLabel}
          body={
            <MultiSelectList 
              labelIsActivePairs={props.treatAreaAndIsActivePairs}
              onClick={props.onClick}
            />
          }
        />
      </div>

      <div className="SearchForm__pickDateDropdown">
        <DropdownContainer 
          label={props.pickDateLabel}
          body={
            <DateRangePicker
              from={props.from}
              to={props.to}
              onDateClick={props.onDateClick}
            />}
        />
      </div>

      <button 
        className="SearchForm__submitButton"
        onClick={props.getSearchResults}>
          {animatedLoadingIcon}
      </button>

    </div>
  )
}

export default SearchForm;

