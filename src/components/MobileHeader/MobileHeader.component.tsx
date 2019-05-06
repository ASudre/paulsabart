import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 13px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.div`
  font-family: Superclarendon;
  font-size: 43px;
  color: rgba(0,0,0,1);
  letter-spacing: 0.55px;
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > div {
    &:not(:first-child) {
      margin: 0 0 0 10px;
    }
  }
`

const Menu = styled.div`
  color: black;
  text-transform: uppercase;
`

type Props = {
  title: string,
  menu?: string[]
}

export default function Header(props: Props) {
  return (
    <HeaderContainer>
      <Title>{props.title}</Title>
      <MenuContainer>
        {props.menu && props.menu.map(m => (
          <Menu key={m}>{m}</Menu>
        ))}
      </MenuContainer>
    </HeaderContainer>
  )
}
