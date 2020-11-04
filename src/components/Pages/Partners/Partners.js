// Partners.js

import React from 'react';

const Partners = () => {
  return(
    <div className="Content Partners"> 

      <div className="Partners__image"></div>

      <h1 className="Partners__heading">Kunne du tænke dig at få henvist flere kunder?</h1>
      
      <div className="Partners__body">
        <p>Der er mange fordele ved at blive samarbejdspartner hos os:</p>
        <ul className="Partners__list">
          <li>Vi står for markedsføring</li>
          <li>Du får flere kunder</li>
          <li>Du får din egen side på vores platform, hvor du på sigt kan vise billeder af dine behandlinger</li>
          <li>Du sparer tid på spørgsmål fra kunder, da de kan læse om behandlinger på vores side</li>
          <li>Det koster intet (der vil være en betalt mulighed, med endnu flere fordele om et kort stykke tid)</li>
        </ul>

        <p>Kort sagt er der kun fordele ved at få din salon på vores platform.</p>

        <p>Kontakt os allerede i dag på <a href="mailto:info@glowspace.dk">info(at)glowspace.dk</a> - Vi glæder os til at høre fra dig!</p>

      </div>

    </div>
  )
}

export default Partners;