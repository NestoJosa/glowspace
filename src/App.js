import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavContainer from './components/Nav/NavContainer';
import ScrollToTop from './components/Nav/ScrollToTop/ScrollToTop';
// import the components that act as the app's various pages
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Partners from './components/Pages/Partners/Partners';
// the Error component is for when users try to access a non-existing url
import Error from './components/Pages/Error/Error';
// import the footer that is visible on all "pages"
import Footer from './components/Footer/Footer';

// import styles
import './sass/main.scss';

function App() {
  return (
    <main>
      <BrowserRouter>
        <ScrollToTop />
          <NavContainer />
        <Switch>
          <Route path="/" component={Home} exact /> 
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/about" component={AboutUs} exact />
          <Route path="/partners" component={Partners} exact />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
