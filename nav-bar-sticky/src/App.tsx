import { Navigation } from './components/nav-bar/Navigation';
import { useAppSelector } from './app/hooks';
import { displayPage } from './components/nav-bar/pageSlice';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Offer from './components/Offer';
import Contact from './components/Contact';

const StyledApp = styled.div``;

const App = () => {
  let currentPage = useAppSelector(displayPage);

  return (
    <StyledApp id='container'>
      <Navigation />
      {currentPage === '/' && <Home />}
      {currentPage === '/about' && <About />}
      {currentPage === '/offer' && <Offer />}
      {currentPage === '/contact' && <Contact />}
    </StyledApp>
  );
};

export { App };
