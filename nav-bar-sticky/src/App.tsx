import { useAppSelector } from './app/hooks';
import { displayPage } from './components/nav-bar/pageSlice';
import styled from 'styled-components';
import {
  StyledHome,
  StyledAbout,
  StyledOffer,
  StyledContact,
  StyledNavigation,
} from './components/index';

type AppProps = {
  className?: string;
};

const App = (props: AppProps) => {
  let currentPage = useAppSelector(displayPage);

  return (
    <div id='container' className={props.className}>
      <StyledNavigation />
      {currentPage === '/' && <StyledHome pageOffsetTop />}
      {currentPage === '/about' && <StyledAbout pageOffsetTop />}
      {currentPage === '/offer' && <StyledOffer pageOffsetTop />}
      {currentPage === '/contact' && <StyledContact pageOffsetTop />}
    </div>
  );
};

const StyledApp = styled(App)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledApp;
