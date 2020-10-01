// Search.js

import React from 'react';
import SearchFormContainer from './SearchForm/SearchFormContainer';
import SearchResultsContainer from './SearchResults/SearchResultsContainer';

const Search = props => {
  return(
    <div className="Search Search--horizontal">
      <div className="Search__backgroundImage"></div>
      <div className="Search__title">
        Find en behandling idag
      </div>
      <div className="Search__formWrapper">
        <SearchFormContainer
          getSearchResults={props.getSearchResults}
          isLoading={props.isLoading}
        />
      </div>
      <div className="Search__resultsWrapper">
        <SearchResultsContainer
          rawSearchResults={props.rawSearchResults}
          clientCoordinates={props.clientCoordinates}
        />
      </div>
    </div>
  )
}

export default Search;