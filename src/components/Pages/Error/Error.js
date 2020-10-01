import React from 'react';

/*

This component is solely for when user writes a url that does not exists
you can consider this a sort of 404 page

example:
glowspace.dk/thisadressdoesnotexists

*/

const Error = function () {

  return(
    <div className="Content">
      <h1>Oops! Page not found!</h1>
    </div>
    
  )
}

export default Error;

