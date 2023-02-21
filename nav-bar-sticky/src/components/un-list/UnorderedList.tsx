import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { changer } from '../nav-bar/pageSlice';
import Item from './Item';
import Link from '../Link';

const StyledUnorderedList = styled.ul``;

const UnorderedList = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledUnorderedList>
      <Item>
        <Link
          href={'/'}
          onClick={(event) => {
            event.preventDefault();
            dispatch(changer(''));
          }}
        >
          Home
        </Link>
      </Item>
      <Item>
        <Link
          href='/about'
          onClick={(event) => {
            event.preventDefault();
            dispatch(changer('about'));
          }}
        >
          About
        </Link>
      </Item>
      <Item>
        <Link
          href='/offer'
          onClick={(event) => {
            event.preventDefault();
            dispatch(changer('offer'));
          }}
        >
          Offer
        </Link>
      </Item>
      <Item>
        <Link
          href='/contact'
          onClick={(event) => {
            event.preventDefault();
            dispatch(changer('contact'));
          }}
        >
          Contact
        </Link>
      </Item>
    </StyledUnorderedList>
  );
};

export default UnorderedList;
