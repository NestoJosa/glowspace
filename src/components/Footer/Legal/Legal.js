// Legal.js
import React from 'react';

const Legal = () => {
  const currYear = new Date().getFullYear();

  return(
    <div className="Legal">
      <a className="Legal__link" href="#">vilkår</a>
      <span className="Legal__dot">&middot;</span>
      <a className="Legal__link" href="#">datapolitik</a>
      <span className="Legal__dot">&middot;</span>
      <a className="Legal__link" href="#">&copy; Glowspace {currYear}</a>
    </div>
  )
}

export default Legal;