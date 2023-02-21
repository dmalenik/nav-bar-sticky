import styled from 'styled-components';

type ItemProps = {
  children: JSX.Element;
};

const StyledItem = styled.li``;

const Item = (props: ItemProps) => {
  return <StyledItem>{props.children}</StyledItem>;
};

export default Item;
