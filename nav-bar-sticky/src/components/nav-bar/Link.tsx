import styled from 'styled-components';
import React, { SyntheticEvent } from 'react';

type LinkProps = {
  href: string;
  onClick: (event: SyntheticEvent<EventTarget>) => void;
  children: string;
};

const StyledLink = styled.a``;

const Link = (props: LinkProps) => {
  return (
    <StyledLink href={props.href} onClick={props.onClick}>
      {props.children}
    </StyledLink>
  );
};

export default Link;
