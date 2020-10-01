import React from "react";
import SaloonCardContainer from './SaloonCard/SaloonCardContainer';
import Treatment from './Treatment/Treatment';

const SearchResults = props => {

  let saloons = props.processedSearchResults;

  let saloonsList = [];

  if (saloons) {
    // Loop through the saloons
    // - outer loop
    for (let i = 0; i < saloons.length; i++) {
      const saloon = saloons[i];

      let treatmentsList = [];

      // Create the list of treatments offered
      // start inner loop
      for (let j = 0; j < saloon.treatmentsOffered.length; j++) {
        const treatment = saloon.treatmentsOffered[j];
        // push a treatment component to the list of treatments
        treatmentsList.push(
          <Treatment
            treatment={treatment}
            key={'treatmentKey' + j}
          />
        );
      };// end inner loop

      // push a saloon card container component
      // to the list of saloons
      saloonsList.push(
        <SaloonCardContainer 
          saloon={saloon}
          treatmentsList={treatmentsList}
          key={'saloonKey' + i}
        />
      );

      // Reset the treatments list, before starting a new outer loop
      // and creating another saloon card
      treatmentsList = [];
    }
  };

  return(
    <div className="SearchResults SearchResults--addMargin">
      {saloonsList}
    </div>
  );
};

export default SearchResults;