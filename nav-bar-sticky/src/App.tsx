import { useAppSelector } from './app/hooks';
import { displayPage } from './components/nav-bar/pageSlice';
import styled from 'styled-components';
import StyledHome from './components/Home';
import StyledAbout from './components/About';
import StyledOffer from './components/Offer';
import StyledContact from './components/Contact';
import StyledNavigation from './components/nav-bar/Navigation';

type AppProps = {
  className?: string;
};

const App = (props: AppProps) => {
  let currentPage = useAppSelector(displayPage);

  return (
    <div id='container' className={props.className}>
      <StyledNavigation />
      {currentPage === '/' && <StyledHome />}
      {currentPage === '/about' && <StyledAbout />}
      {currentPage === '/offer' && <StyledOffer />}
      {currentPage === '/contact' && <StyledContact />}
    </div>
  );
};

const StyledApp = styled(App)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default StyledApp;
