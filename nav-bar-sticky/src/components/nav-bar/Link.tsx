import styled from 'styled-components';
import React, { SyntheticEvent } from 'react';

type LinkProps = {
  href: string;
  className?: string;
  onClick: (event: SyntheticEvent<EventTarget>) => void;
  children: string;
};

const Link = (props: LinkProps) => {
  return (
    <a href={props.href} onClick={props.onClick} className={props.className}>
      {props.children}
    </a>
  );
};

const StyledLink = styled(Link)``;

export default StyledLink;
