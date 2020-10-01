// DropdownContainer.js

import React, { Component } from 'react';
import Dropdown from './Dropdown';

class DropdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
    // binder
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideWrapperClick = this.handleOutsideWrapperClick.bind(this);
  }

  handleClick() {
    if (!this.state.isActive) {
      document.addEventListener('click', this.handleOutsideWrapperClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideWrapperClick, false);
    }
    this.setState({ isActive: !this.state.isActive })
  }

  handleOutsideWrapperClick(e) {
    // do nothing if click on wrapper
    if (this.node.contains(e.target)) { 
      return; 
    } else {
      this.handleClick();
    }
  }

  render() {
    return(
      <div 
        className="DropdownWrapper" 
        ref={node => { this.node = node; }}>  
          <Dropdown 
            label={this.props.label}
            isActive={this.state.isActive}
            onClick={this.handleClick}
            body={this.props.body} />
      </div>
    )
  }
}

export default DropdownContainer;