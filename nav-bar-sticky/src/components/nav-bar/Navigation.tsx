import styled from 'styled-components';
import StyledLink from './Link';
import { useAppDispatch } from '../../storage/hooks';
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
        menuOffsetLeft
      >
        Home
      </StyledLink>
      <StyledLink
        href='/about'
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer('about'));
        }}
        menuOffsetRight
      >
        About
      </StyledLink>
      <StyledLink
        href='/offer'
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer('offer'));
        }}
        menuOffsetRight
      >
        Offer
      </StyledLink>
      <StyledLink
        href='/contact'
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer('contact'));
        }}
        menuOffsetRight
      >
        Contact
      </StyledLink>
    </nav>
  );
};

const StyledNavigation = styled(Navigation)`
  width: 100%;
  padding: 15px 30px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  background-color: #595856;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;

export { StyledNavigation };
