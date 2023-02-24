import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { changer } from './pageSlice';
import StyledItem from './Item';
import StyledLink from './Link';

type UnorderedListProps = {
  className?: string;
};

const UnorderedList = (props: UnorderedListProps) => {
  const dispatch = useAppDispatch();

  return (
    <ul className={props.className}>
      <StyledItem>
        <StyledLink
          href={'/'}
          onClick={(event) => {
            event.preventDefault();
            dispatch(changer(''));
          }}
        >
          Home
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink
          href='/about'
          onClick={(event) => {
            event.preventDefault();
            dispatch(changer('about'));
          }}
        >
          About
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink
          href='/offer'
          onClick={(event) => {
            event.preventDefault();
            dispatch(changer('offer'));
          }}
        >
          Offer
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink
          href='/contact'
          onClick={(event) => {
            event.preventDefault();
            dispatch(changer('contact'));
          }}
        >
          Contact
        </StyledLink>
      </StyledItem>
    </ul>
  );
};

const StyledUnorderedList = styled(UnorderedList)``;

export default StyledUnorderedList;
