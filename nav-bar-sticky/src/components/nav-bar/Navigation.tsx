import styled from 'styled-components';
import UnorderedList from '../UnorderedList';

const StyledNavigation = styled.nav``;

const Navigation = () => {
  return (
    <StyledNavigation id='navigation'>
      <UnorderedList />
    </StyledNavigation>
  );
};

export { Navigation };
