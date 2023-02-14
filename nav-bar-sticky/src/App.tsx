import { useAppSelector } from './app/hooks';
import { Navigation } from './components/Navigation';
import { displayPage } from './components/pageSlice';
import About from './components/About';
import Offer from './components/Offer';
import Contact from './components/Contact';

const App = () => {
  let currentPage = useAppSelector(displayPage);

  return (
    <div id='container'>
      {currentPage === '/' && <Navigation />}
      {currentPage === '/about' && <About />}
      {currentPage === '/offer' && <Offer />}
      {currentPage === '/contact' && <Contact />}
    </div>
  );
};

export { App };
