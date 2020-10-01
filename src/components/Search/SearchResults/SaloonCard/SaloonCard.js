import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './SaloonCard.css';

// kick off the polyfill!
// this is a a smoothScroll requirement:
// https://www.npmjs.com/package/smoothscroll-polyfill
smoothscroll.polyfill();

const SaloonCard = props => {
  // toggle the height prop of the saloon body
  let maximized = props.maximized === true ? ' maximized' : '';

  // sets a fade out background on the saloon body as default
  // if there are more than two treatments
  let fadeOut = props.maximized === false & props.treatmentsList.length > 2 ? 
      <div className="fade-out"></div> : 
      "";

  // check if the treatment list is short, 
  // if so then add the fade-out effect on the saloon body
  let hasOnlyOneTreatment = props.treatmentsList.length <= 2 ? true : false; 
  let inactiveShowMorelessBtn = hasOnlyOneTreatment ? " inactive" : "";

  // set the label text
  let showMoreLessBtnText = props.maximized === false ? 'Vis alle' : 'Vis færre';

  // create a shortcut for the saloons
  let saloon = props.saloon;

  return(
    <div>
      <div className="saloon-distance-wrapper">
        <span className="saloon-distance">{saloon.distance} km</span>
      </div>
      <div className="saloon-header">
        <span className="saloon-name">{saloon.name} </span>
        <div className="saloon-location-wrapper">
          <i className="saloon-location-icon"></i>
          <div>
            <span className="saloon-street">{saloon.street}</span>
            <span className="saloon-postalcode-city">{saloon.postalcode} {saloon.city}</span>
          </div>
        </div>
      </div>
      <div 
        className={"saloon-body" + maximized}
        >
          {/* The treatmentsList is created in ShowSearchResults.js */}
          {props.treatmentsList}
          {/* The fadeOut div is only shown when the saloon body is minimized (default), 
          or if the treatment list only contains two treatments */}
          {fadeOut}
      </div>
      <div className="saloon-footer">
        <div 
          className={"show-more-less-btn" + inactiveShowMorelessBtn}
          onClick={props.onClick}
          >
            {showMoreLessBtnText}
        </div>
        <a href={saloon.bookurl}>
          <div className="book-btn">
            Book
          </div>
        </a>
      </div>
    </div>
  )


}


export default SaloonCard;