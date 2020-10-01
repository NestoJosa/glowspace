import React from 'react';
import logoImg from './logo_white.svg'


const Logo = props => {
  return(
    <img 
      alt="Glowspace Logo" 
      src={logoImg} 
      style={props.style}
    />
  )
}

export default Logo;
