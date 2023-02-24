import styled from 'styled-components';

type ItemProps = {
  className?: string;
  children: JSX.Element;
};

const Item = (props: ItemProps) => {
  return <li className={props.className}>{props.children}</li>;
};

const StyledItem = styled(Item)``;

export default StyledItem;
