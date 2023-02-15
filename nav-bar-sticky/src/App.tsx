import { Navigation } from './components/Navigation';
import { useAppSelector } from './app/hooks';
import { displayPage } from './components/pageSlice';
import Home from './components/Home';
import About from './components/About';
import Offer from './components/Offer';
import Contact from './components/Contact';

const App = () => {
  let currentPage = useAppSelector(displayPage);

  return (
    <div id='container'>
      <Navigation />
      {currentPage === '/' && <Home />}
      {currentPage === '/about' && <About />}
      {currentPage === '/offer' && <Offer />}
      {currentPage === '/contact' && <Contact />}
    </div>
  );
};

export { App };
