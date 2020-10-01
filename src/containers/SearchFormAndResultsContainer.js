// SearchFormAndResultsContainer.js

import React from 'react';
import GetSearchString from '../components/Search/GetSearchString/GetSearchString';
import SearchFormContainer from './SearchFormContainer';
import SearchResultsContainer from '../components/Search/SearchResultsContainer';

class SearchFormAndResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null,
      lat: null,
      lon: null,
    };
    this.getSearchResults = this.getSearchResults.bind(this);
  };

  componentDidMount() {
    if (navigator.geolocation) {
      // the arrow-success-func is a required func for the 
      // getCurrentPosition method and takes a position object only
      navigator.geolocation.getCurrentPosition( (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    };
  };

  getSearchResults(searchParams) {
    // Get a formatted string for the api
    let stringForApi = GetSearchString(searchParams);

    // Get search results
    fetch(stringForApi)
      .then(res => res.json())
      .then((data) => {
        this.setState({ searchResults: data });
      })
      // Log any errors to the console
      .catch(console.log)
  };

  render() {
    return(
      <div className="SearchFormAndResultWrapper">
      
          <div className="Search Search--showImage">

            <h2 className="Search__title">Find behandling</h2>
            <div className="Search__form">
              <SearchFormContainer 
                getSearchResults={this.getSearchResults}
              />
            </div>
            <div className="Search__image"></div>

          </div>

          <div className="SearchResults">
            {/* <h2 className="SearchResults__title">
              search results title: include the search parameters
            </h2> */}
            <div className="SearchResults__cards">
              {/* prev_ ProcessSearchResults*/}
              <SearchResultsContainer 
                unProcessedData={this.state.searchResults}
                clientCoordinates={{ 
                  'clientLatitude': this.state.lat,  
                  'clientLongitude': this.state.lon,  
                }}
              />
            </div>
          </div>

      </div>
    );
  };
};

export default SearchFormAndResultsContainer;