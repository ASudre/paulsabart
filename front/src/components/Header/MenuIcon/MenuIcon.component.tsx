import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  width: 30px;
  padding: 5px 0 0 0;
  -webkit-font-smoothing: antialiased;
  > div {
    padding: 0 0 4px 0;
    &:not(:last-child) {
      padding: 0 0 9px 0;
    }
    border-top: 1px solid black;
  }
`

export default function MobileMenu() {
  return (
    <MenuContainer>
      <div></div>
      <div></div>
      <div></div>
    </MenuContainer>
  )
}