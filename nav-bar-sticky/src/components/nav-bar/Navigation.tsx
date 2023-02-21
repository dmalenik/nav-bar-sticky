import { useAppDispatch } from '../../app/hooks';
import { changer } from './pageSlice';
import styled from 'styled-components';

const StyledNavigation = styled.nav``;

const Navigation = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledNavigation id='navigation'>
      <ul>
        <li>
          <a
            href={'/'}
            onClick={(e) => {
              e.preventDefault();
              dispatch(changer(''));
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='/about'
            onClick={(e) => {
              e.preventDefault();
              dispatch(changer('about'));
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href='/offer'
            onClick={(e) => {
              e.preventDefault();
              dispatch(changer('offer'));
            }}
          >
            Offer
          </a>
        </li>
        <li>
          <a
            href='/contact'
            onClick={(e) => {
              e.preventDefault();
              dispatch(changer('contact'));
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export { Navigation };
