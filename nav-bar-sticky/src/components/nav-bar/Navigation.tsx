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
      >
        Home
      </StyledLink>
      <StyledLink
        href='/about'
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer('about'));
        }}
      >
        About
      </StyledLink>
      <StyledLink
        href='/offer'
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer('offer'));
        }}
      >
        Offer
      </StyledLink>
      <StyledLink
        href='/contact'
        onClick={(event) => {
          event.preventDefault();
          dispatch(changer('contact'));
        }}
      >
        Contact
      </StyledLink>
    </nav>
  );
};

const StyledNavigation = styled(Navigation)``;

export default StyledNavigation;
