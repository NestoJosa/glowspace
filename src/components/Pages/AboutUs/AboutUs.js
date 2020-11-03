// AboutUs.js

import React from 'react';

// import the profiles of the founders
import heidiProfileImg from '../../../assets/founders/heidi.png';
import flemmingProfileImg from '../../../assets/founders/flemming.png';
import claudiaProfileImg from '../../../assets/founders/claudia.png';

// if you want to change the order of the rendered founders,
// change the number-key
const founders = {
  1: {
    name: 'Heidi S.  R. Johansen',
    title: 'Founder',
    image: heidiProfileImg,
  },  
  2: {
    name: 'Flemming J. Petersen',
    title: 'Co-Founder',
    image: flemmingProfileImg,
  },  
  3: {
    name: 'Claudia C. C. E. Toft',
    title: 'Content Writer',
    image: claudiaProfileImg,
  },  
}

const About = () => {
  // create a list of founders
  const listOfFounders = Object.values(founders).map( (founder, index) => {
    return (
      // a unique key is required in react-land when creating lists
      <ul
        className="Founder Founder--horizontal" 
        key={"Founder__image" + index}>
          <li className="Founder__image">
            <img src={founder.image} alt={"Profile of" + founder.name}/>
          </li>
          <li className="Founder__name">{founder.name}</li>
          <li className="Founder__title">{founder.title}</li>
      </ul>   
    )
  });

  return (
    <div className="Content AboutUs">

      <h1 className="AboutUs__heading">Meet the team</h1>

      <div class="FoundersWrapper FoundersWrapper--horizontal">
        {listOfFounders}
      </div>
      
    </div>
  )
}

export default About;