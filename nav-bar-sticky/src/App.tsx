import { StyledNavigation } from './components/nav-bar/Navigation';
import { useAppSelector } from './app/hooks';
import { displayPage } from './components/nav-bar/pageSlice';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Offer from './components/Offer';
import Contact from './components/Contact';

type AppProps = {
  className?: string;
};

const App = (props: AppProps) => {
  let currentPage = useAppSelector(displayPage);

  return (
    <div id='container' className={props.className}>
      <StyledNavigation />
      {currentPage === '/' && <Home />}
      {currentPage === '/about' && <About />}
      {currentPage === '/offer' && <Offer />}
      {currentPage === '/contact' && <Contact />}
    </div>
  );
};

const StyledApp = styled(App)``;

export default App;
