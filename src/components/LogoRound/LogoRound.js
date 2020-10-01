import React from 'react';

import logoVector from '../../assets/icons/logo_round.svg'

const logoStyles = {
  width: "80%"
}

const LogoRound = props => {
  return(
    <img 
      alt="Round Logo"
      src={logoVector} 
      style={logoStyles}
    />
  )
}

export default LogoRound;