// import libaries
import React from 'react';
import styled from 'react-emotion';

// input field
export const Input = styled('input')``;

// menu
export const Menu = styled('div')`
  & > * {
    display: inline-block;
  }
  & > * + * {
    margin-left: 13px;
  }
`;

// ICONS in toolbar
export const Icon = styled(({ className, ...rest }) => {
  return <span className={`material-icons ${className}`} {...rest} />;
})`
  vertical-align: bottom;
  font-size: 18px;
`;

// Toolbar menu
export const Toolbar = styled(Menu)`
  position: fixed;
  padding: 10px 18px 0px;
  left: -90px;
  right: 0;
  border-bottom: 2px solid rgb(238, 238, 238);
  z-index: 100;
  margin-bottom: 20px;
  width: 100%;
  display: block;
  height: 30px;
`;



// BUTTON
export const Button = styled('span')`
  cursor: pointer;
  color: ${props =>
    props.reversed
      ? props.active
        ? 'white'
        : '#aaa'
      : props.active
      ? 'black'
      : '#ccc'};
`;

