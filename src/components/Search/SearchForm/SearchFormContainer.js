// SearchFormContainer.js

import React, { Component } from "react";
import SearchForm from './SearchForm';

// Import the icons
import iconHair from '../../../assets/icons/hair.svg';
import iconFace from '../../../assets/icons/face.svg';
import iconHand from '../../../assets/icons/hand.svg';
import iconBody from '../../../assets/icons/body.svg';
import iconFeet from '../../../assets/icons/feet.svg';

// Create an object for the labels in different languages
let treatmentAreas = {
  eng: ['Hair', 'Face', 'Hands', 'Body', 'Feet'],
  dk: ['Hår', 'Ansigt', 'Hænder', 'Krop', 'Fødder'],
}

// WARNING: currently it will not work to change the language settings 
let locale = 'dk';

// Create an object for the treatmentAreaData
const treatmentAreaData = {
  hair: {
    label: treatmentAreas[locale][0],
    isActive: true,
    icon: iconHair,
  },
  face: {
    label: treatmentAreas[locale][1],
    isActive: true,
    icon: iconFace,
  },
  hands: {
    label: treatmentAreas[locale][2],
    isActive: true,
    icon: iconHand,
  },
  body: {
    label: treatmentAreas[locale][3],
    isActive: true,
    icon: iconBody,
  },
  feet: {
    label: treatmentAreas[locale][4],
    isActive: true,
    icon: iconFeet,
  },
}

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    // Set the initial default values
    this.state = {
      [treatmentAreaData['hair'].label]:  treatmentAreaData['hair'].isActive,
      [treatmentAreaData['face'].label]:  treatmentAreaData['face'].isActive,
      [treatmentAreaData['hands'].label]: treatmentAreaData['hands'].isActive,
      [treatmentAreaData['body'].label]:  treatmentAreaData['body'].isActive,
      [treatmentAreaData['feet'].label]:  treatmentAreaData['feet'].isActive,
      from: null,
      to: null, 
    }

    // Create a list of icons. Note: we are looping through the treatmentAreaData-obj, 
    // NOT the state object, because these vals will not change
    this.treatmentAreaIconList = Object.entries(treatmentAreaData).map( currEl => currEl[1].icon);

    // Binders
    this.handleClick = this.handleClick.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  // toggle the clicked treatment-area isActive value
  handleClick(clickedTreatmentArea) {
    this.setState({ [clickedTreatmentArea]: !this.state[clickedTreatmentArea] });
  }

  handleDateClick(e) {
    this.setState({
      from: e.from,
      to: e.to
    });
  }

  handleSubmitClick() {
    this.props.getSearchResults(this.state); 
  }

  render() {
    let treatAreaAndIsActivePairs = Object.entries(this.state).slice(0,5);

    let treatAreaDropdownLabel = getTreatAreaLabel(getActiveTreatAreas(treatAreaAndIsActivePairs));

    let pickDateDropdownLabel = getPickDateDropdownLabel(this.state.from, this.state.to)
      
    return(
      <SearchForm
        treatAreaAndIsActivePairs={treatAreaAndIsActivePairs}
        treatAreaIcons={this.treatmentAreaIconList}
        treatAreaDropdownLabel={treatAreaDropdownLabel}
        onClick={this.handleClick}
        // props for DatePicker
        from={this.state.from} 
        to={this.state.to}
        pickDateLabel={pickDateDropdownLabel}
        onDateClick={this.handleDateClick} 
        // pass the method used to get search results
        getSearchResults={this.handleSubmitClick}
        isLoading={this.props.isLoading}
      />
    )
  }
}

export default SearchFormContainer;


/* 

  Helper Functions

*/

// takes a list of treatment-area and is-active pairs: e.g [['Hair', true], ['Face', false], ['Hands', true]]
// returns a list of active treatment areas only:  e.g. ['Hair', 'Hands']
const getActiveTreatAreas = entries => entries.filter(currEl => currEl[1] === true).map(currEl => currEl[0]);
          

// takes a list of treatment areas: ['Hair', 'Hands']
// returns a new formatted list of treat areas: [['Hair', ', Hands']]
// note the inclusion of a comma sign and space starting from the second element
const getTreatAreaLabel = arr => {
  let newLabel = [];
  
  // return a custom msg e.g. "Chose treatment area" if no areas chosen
  if (arr.length === 0) { 
    newLabel.push("Vælg behandlings område"); 
  }
  
  // do not format if only one element in the list
  else if (arr.length === 1) { 
    newLabel.push(arr[0]); 
  }
  
  else if (arr.length > 1) {
    // push the first area to the new list
    newLabel.push(arr[0])
    // then format and push the rest
    for (let i = 1; i < arr.length; i++) { newLabel.push(', ' + arr[i]); }
  }

  return newLabel;
};

// takes a from and to date object
// returns a label for the pickDateDropdown
const getPickDateDropdownLabel = (from, to) => {
  let fromDate = from ? `${from.day}/${from.month}` : null ;
  let toDate = to ? `${to.day}/${to.month}` : null ;
  let label;

  if (!fromDate) {
    label = 'Vælg datoer'
  }

  else if (fromDate && !toDate) {
    label = fromDate
  }

  else if (fromDate && toDate) {
    label = fromDate + " - " + toDate
  }

  return label;
}