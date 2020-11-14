/* Footer.js */

import React from 'react';
import LineWithDots from '../Line/Line';
import LogoRound from '../LogoRound/LogoRound';
import ContactForm from '../ContactForm/ContactForm';
import LinksBlock from '../LinksBlock/LinksBlock';
import AddressBlock from '../AddressBlock/AddressBlock';
import SoMe from '../SoMe/SoMe';
import Legal from './Legal/Legal';

const Footer = () => {
  return(
    <div className="FooterWrapper">
      <div className="Footer Footer--twoRows Footer--oneRow">
        <div className="Footer__item">
          <LogoRound />
        </div>
        <div className="Footer__item">
          <ContactForm />
        </div>
        <div className="Footer__item">
          <LinksBlock data={links} />
        </div>
        <div className="Footer__item">
          <LinksBlock data={aboutUs} />
        </div>
        <div className="Footer__item">
          <AddressBlock />
        </div>
        <div className="Footer__item">
          <SoMe />
        </div>
        <div className="Footer__item">
          <LineWithDots />
        </div>
        <div className="Footer__item">
          <Legal />
        </div>
      </div>
    </div>
  )
}

export default Footer;


/* 

  Data for the links blocks

*/

/* Block One: Links  */
const links = {
  heading: 'Links',
  links: [
    {
      desc: 'faq',
      href: '#'
    },
    {
      desc: 'blog',
      href: '#'
    },
    {
      desc: 'find salon',
      href: '#'
    },
    {
      desc: 'opret salon',
      href: '#'
    },
  ]
};

/* Block Two: About us */
const aboutUs = {
  heading: 'Om os',
  links: [
    {
      desc: 'team',
      href: '#'
    },
    {
      desc: 'kontakt',
      href: '#'
    },
  ]
};