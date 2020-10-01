import React from 'react';
import fbLogo from '../../assets/icons/facebook_logo.svg';
import instaLogo from '../../assets/icons/instagram_icon.svg';
import linkedinLogo from '../../assets/icons/linkedin_logo.svg';

const SoMe = props => {
  return(
    <div className="SoMe">

      <h2 className="SoMe__heading">Sociale Medier</h2>
      
      <div className="SoMe__item">
        <a href="#" className="SoMe__anchor">
          <img 
            className="SoMe__fbLogo"  
            src={fbLogo} 
            alt="Link to Facebook page" 
          />          
        </a>
      </div>

      <div className="SoMe__item">
        <a href="#" className="SoMe__anchor">
          <img 
            className="SoMe__instaLogo"  
            src={instaLogo} 
            alt="Link to Instagram profile" 
          />           
        </a>
      </div>

      <div className="SoMe__item">
        <a href="#" className="SoMe__anchor">
          <img 
            className="SoMe__linkedinLogo"  
            src={linkedinLogo} 
            alt="Link to Linkedin page" 
          /> 
        </a>
      </div>
    
    </div>
  );
};

export default SoMe;