// NavContainer.js

import React, { Component } from 'react';
import Nav from './Nav';
import Headroom from 'react-headroom';

class NavContainer extends Component {
  constructor(props) {
    super(props);
    
    // Set the menus default state
    this.state = { isOpen: false }
    
    // Binders
    this.handleClick = this.handleClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleLogoClick() {
    // check if the menu is open, before calling handleClick  
    if (this.state.isOpen) { this.handleClick(); }
  }

  handleOutsideClick(e) {
    // do nothing if user clicked on nav
    // else call handleClick  
    if (this.node.contains(e.target)) {
      return; 
    } else {
      this.handleClick();
    }
  }
  
  render() {
    return(
      // the reference on the div is used to track clicks
      // outside of the Nav component
      <div ref={node => { this.node = node; }}>
        <Headroom
          onUnpin={ () => console.log('onUnpin triggered')}
          wrapperStyle={{position: 'absolute', width: '100%'}}
        >
          <Nav
            isOpen={this.state.isOpen}
            onClick={this.handleClick} 
            onLogoClick={this.handleLogoClick} 
          />
        </Headroom>
      </div>
    )
  }
}

export default NavContainer;