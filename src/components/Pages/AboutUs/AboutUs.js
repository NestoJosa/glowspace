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
      <ul key={"founder" + index}>
        <li >
          <img src={founder.image} alt={"Profile of" + founder.name}/>
        </li>
        <li >{founder.name}</li>
        <li >{founder.title}</li>
      </ul>   
    )
  });

  return (
    <div className="Content">

      <h1>Meet the team</h1>

      <div>
        {listOfFounders}
      </div>
      
    </div>
  )
}

export default About;