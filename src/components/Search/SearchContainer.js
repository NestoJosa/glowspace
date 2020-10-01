import React from 'react';
import GetSearchString from './GetSearchString/GetSearchString';
import Search from './Search';


class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null,
      lat: null,
      lon: null,
      isLoading: false,
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
          lon: position.coords.longitude,
        });
      });
    };
  };

  
  getSearchResults(searchParams) {
    // Create a formatted string for the api
    let stringForApi = GetSearchString(searchParams);
    
    this.setState({
      searchResults: null,
      isLoading: true}
      , () => {
      fetch(stringForApi)
      .then(res => res.json())
      .then((data) => {
        // here we could process the data
        this.setState({ 
          searchResults: data,
          isLoading: false
        });
      })
      // Log any errors to the console
      .catch( (err) => {
        this.setState({ isLoading: false })
        console.log('Error Log:')
        console.log(err)
      });
    })    
  };

  render() {
    let coordinates = this.state.lat === !null && this.state.lon === !null 
      ? { 'clientLatitude': this.state.lat, 'clientLongitude': this.state.lon }
      : null
    ;

    return(
      <Search 
        getSearchResults={this.getSearchResults}
        rawSearchResults={this.state.searchResults}
        clientCoordinates={coordinates}
        isLoading={this.state.isLoading}
      />
    );
  };
};

export default SearchContainer;
