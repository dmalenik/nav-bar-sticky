import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { changer } from './pageSlice';
import Item from './Item';
import Link from './Link';

type UnorderedListProps = {
  className?: string;
};

const UnorderedList = (props: UnorderedListProps) => {
  const dispatch = useAppDispatch();

  return (
    <ul className={props.className}>
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
    </ul>
  );
};

const StyledUnorderedList = styled(UnorderedList)``;

export default StyledUnorderedList;
