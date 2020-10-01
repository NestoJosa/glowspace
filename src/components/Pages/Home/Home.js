import React from 'react';
import SimpleSlider from '../../Slider/Slider';
import SearchContainer from '../../Search/SearchContainer';

const Home = function () {
  return(
    <section className="Content">


      <SearchContainer />
      
      <SimpleSlider />
      
    </section>
  );
};

export default Home;