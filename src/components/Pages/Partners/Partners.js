// Partners.js

import React from 'react';

const Partners = () => {
  return(
    <div className="Content Partners"> 
      <h1 className="Partners__heading">Har du lyst til at blive samarbejdspartner?</h1>

      <div className="Partners__backgroundImage"></div>

           
      <h2 className="Partners__subHeading">Kunne du også tænke dig at få din salon vist på Glowspace, og få henvist flere kunder?</h2>

      <div className="Partners__body">
        <p>Der er mange fordele ved at blive samarbejdspartner hos os:</p>
        <ul>
          <li>Vi står for markedsføring</li>
          <li>Du får flere kunder</li>
          <li>Du får din egen side på vores platform, hvor du på sigt kan vise billeder af dine behandlinger</li>
          <li>Du sparer tid på spørgsmål fra kunder, da de kan læse om behandlinger på vores side</li>
          <li>Det koster intet (der vil være en betalt mulighed, med endnu flere fordele om et kort stykke tid)</li>
        </ul>
        <p>Kort sagt er der kun fordele ved at få din salon på vores platform.</p>
        <p>Kontakt os allerede i dag - Vi glæder os til at høre fra dig!</p>
      </div>

      {/* contact button */}
      <div className="Partners__contactButton">contact button</div>

    </div>
  )
}

export default Partners;