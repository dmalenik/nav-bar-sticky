import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { changer } from './nav-bar/pageSlice';

const StyledUnorderedList = styled.ul``;

const UnorderedList = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledUnorderedList>
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
    </StyledUnorderedList>
  );
};

export default UnorderedList;
