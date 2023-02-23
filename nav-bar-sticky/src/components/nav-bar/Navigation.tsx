import styled from 'styled-components';
import UnorderedList from './UnorderedList';

const Navigation = () => {
  return (
    <nav id='navigation'>
      <UnorderedList />
    </nav>
  );
};

const StyledNavigation = styled(Navigation)``;

export { StyledNavigation };
