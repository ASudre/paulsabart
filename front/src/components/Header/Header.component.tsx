import React from 'react';
import styled from 'styled-components';

import MenuIcon from './MenuIcon/MenuIcon.component';
import CrossIcon from './CrossIcon/CrossIcon.component';

import { devices } from '../../breakpoints';

const IconsContainer = styled.div`
@media ${devices.mobileS} {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  @media ${devices.laptop} {
    display: none;
  }
`

const HeaderContainer = styled.div<{
    opened?: boolean,
}>`
  @media ${devices.mobileS} {
    box-shadow: ${p => !p.opened ? "0 3px 6px 0 rgba(0, 0, 0, 0.16)" : "none"};
  }
  @media ${devices.laptop} {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
  padding: 13px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.div`
  font-family: Superclarendon;
  @media ${devices.mobileS} {
    font-size: 30px;
  }
  @media ${devices.tablet} {
    font-size: 43px;
  }
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
  opened?: boolean,
  menu?: string[],
  toggleMenu?: () => void,
}

export default function Header(props: Props) {
  return (
    <HeaderContainer opened={props.opened} >
      <IconsContainer onClick={props.toggleMenu} >
        {!!props.toggleMenu &&
          (props.opened ? <CrossIcon></CrossIcon> : <MenuIcon></MenuIcon>)
        }
      </IconsContainer>
      <Title>{props.title}</Title>
      <MenuContainer>
        {props.menu && props.menu.map(m => (
          <Menu key={m}>{m}</Menu>
        ))}
      </MenuContainer>
    </HeaderContainer>
  )
}
