import styled from 'styled-components';
import React, { SyntheticEvent } from 'react';

type LinkProps = {
  href: string;
  className?: string;
  onClick: (event: SyntheticEvent<EventTarget>) => void;
  menuOffsetLeft?: boolean;
  menuOffsetRight?: boolean;
  children: string;
};

const Link = (props: LinkProps) => {
  return (
    <a href={props.href} onClick={props.onClick} className={props.className}>
      {props.children}
    </a>
  );
};

const StyledLink = styled(Link)`
  margin-right: ${(props) =>
    props.menuOffsetLeft ? 'auto' : props.menuOffsetRight ? '20px' : '0'};
  :active,
  :hover,
  :link,
  :visited {
    text-decoration: none;
  }
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: ${(props) => (props.children === 'Home' ? 'bolder' : 'normal')};
  color: #fff;
`;

export default StyledLink;
