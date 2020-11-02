import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import SaloonCard from './SaloonCard';

// this is a a smoothScroll requirement:
// https://www.npmjs.com/package/smoothscroll-polyfill
smoothscroll.polyfill();

class SaloonCardContainer extends React.Component {
  constructor(props) {
    super(props);
    // maximized represents the saloon body either being maximized (showing all treatments)
    // or minimized (only a few treatments shown)
    this.state = { maximized: false };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    // scroll to the saloon card when user closes the full treatment list
    if (this.state.maximized === true) {
      this.node.scrollIntoView({behavior: 'smooth'})  
    };
  
    this.setState({ maximized: !this.state.maximized });
  };

  render() {
    return(
      <div className="saloon-card" ref={node => this.node = node }>
        <SaloonCard 
          saloon={this.props.saloon}
          treatmentsList={this.props.treatmentsList}
          maximized={this.state.maximized}
          onClick={this.handleClick}
        />
      </div>
    );
  };
};



export default SaloonCardContainer;