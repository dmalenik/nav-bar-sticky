import styled from 'styled-components';
import StyledUnorderedList from './UnorderedList';

type NavigationProps = {
  className?: string;
};

const Navigation = (props: NavigationProps) => {
  return (
    <nav id='navigation' className={props.className}>
      <StyledUnorderedList />
    </nav>
  );
};

const StyledNavigation = styled(Navigation)``;

export default StyledNavigation;
