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
      {currentPage === '/' && <StyledHome className={'pages-offset-top'} />}
      {currentPage === '/about' && (
        <StyledAbout className={'pages-offset-top'} />
      )}
      {currentPage === '/offer' && (
        <StyledOffer className={'pages-offset-top'} />
      )}
      {currentPage === '/contact' && (
        <StyledContact className={'pages-offset-top'} />
      )}
    </div>
  );
};

const StyledApp = styled(App)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledApp;
