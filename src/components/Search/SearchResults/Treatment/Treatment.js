import React from 'react';
import './Treatment.css';

const Treatment = props => {
  const treatment = props.treatment;

  // only ouput some html for the description if there is one
  const description = treatment.description ? 
          <span className="treatment-description">{treatment.description}</span> : 
          null;

  const treatmentAvailabilityLabel = treatment.count > 1 ? 
          treatment.count + ' ledige tider' : 
          treatment.count + ' ledig tid'; 

  return(
    <div className="treatment-wrapper">
      <span className="treatment-price">{treatment.price} DKK</span>
      <span className="treatment-name">{treatment.name}</span>
      {/* there will be no html here if there is no description */}
      {description}
      <div className="treatment-next-duration-availability-wrapper">
        <div className="icon-label-wrapper">
          <i className="treatment-next-icon"></i>
          <span className="treatment-next">{treatment.next}</span>
        </div>
        <div className="icon-label-wrapper">
          <i className="treatment-duration-icon"></i>
          <span className="treatment-duration">{treatment.duration} min</span>
        </div>
        <div className="icon-label-wrapper">
          <i className="treatment-availability-icon"></i>
          <span className="treatment-availability">{treatmentAvailabilityLabel}</span>
        </div>
      </div>
      {/* horizontal line */}
      <div className="hl"></div>
    </div>
  );
};

export default Treatment;