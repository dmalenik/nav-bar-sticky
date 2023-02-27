import styled from 'styled-components';
import StyledLink from './Link';
import { useAppDispatch } from '../../app/hooks';
import { changer } from './pageSlice';

type NavigationProps = {
  className?: string;
};

const Navigation = (props: NavigationProps) => {
  const dispatch = useAppDispatch();

  return (
    <nav id='navigation' className={props.className}>
      <StyledLink
        href={'/'}
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer(''));
        }}
        className={'menu-offset-left'}
      >
        Home
      </StyledLink>
      <StyledLink
        href='/about'
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer('about'));
        }}
        className={'menu-offset-right'}
      >
        About
      </StyledLink>
      <StyledLink
        href='/offer'
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer('offer'));
        }}
        className={'menu-offset-right'}
      >
        Offer
      </StyledLink>
      <StyledLink
        href='/contact'
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer('contact'));
        }}
        className={'menu-offset-right'}
      >
        Contact
      </StyledLink>
    </nav>
  );
};

const StyledNavigation = styled(Navigation)`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  background-color: pink;
  opacity: 0.65;
  :hover {
    opacity: 1;
  }
`;

export default StyledNavigation;
