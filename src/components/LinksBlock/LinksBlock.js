/* 

  Note: this component expects to be passed some data,
  in order to generate the links and heading 

*/

import React from 'react';

const LinksBlock = props => {

  // get the heading
  const heading = props.data.heading;

  // create a list of links, by looping through 
  // the passed list of links
  const list = props.data.links.map( (link, i) => {
    return (
      <li 
        className="LinksBlock__listItem"
        // a unique key is needed when making lists in react-land
        key={heading + i} 
        >
          <a href={link.href} className="LinksBlock__anchor">{link.desc}</a>
      </li>
    )
  });

  return(
    <div className="LinksBlock">
      <h2 className="LinksBlock__heading">{heading}</h2>
      <ul className="LinksBlock__list">
        {list}
      </ul>
    </div>
  );
};

export default LinksBlock;