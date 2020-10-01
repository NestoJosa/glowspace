// SearchResultsContainer.s

import React from "react";

// import the utils needed
// for processing the raw search results
import {
  addTheTreatmentsOffered, 
  addCountAndNextToEachTreatment, 
  shortenTitleAndDescription, 
  addDistanceToSaloon
} from './Utils/SearchResultsUtils';

import SearchResults from './SearchResults';

class SearchResultsContainer extends React.Component {
  componentDidUpdate() {
    console.log('component updated!')
    if (this.props.rawSearchResults) {
      this.node.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })  
    };
  }

  render () {
    let searchResults;

    if (this.props.rawSearchResults) {
      // deep copy the object
      searchResults = JSON.parse(JSON.stringify(this.props.rawSearchResults))

      // create a list of treatmentsOffered and add it to each saloon
      addTheTreatmentsOffered(searchResults)

      // add the total amount of available individual treatments
      // and the next available time, to each treatment offered 
      addCountAndNextToEachTreatment(searchResults)

      // shorten the titles that are more than 100 chars
      // and the description that are more than 200 chars
      shortenTitleAndDescription(searchResults);

      if (this.props.clientCoordinates) {
        addDistanceToSaloon(this.props.clientCoordinates, searchResults);
      }
    };

    return(
      <div ref={node => this.node = node }>
        <SearchResults 
          processedSearchResults={searchResults}
        />
      </div>
    );
  }
}




export default SearchResultsContainer;