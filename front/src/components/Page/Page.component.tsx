import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Picture as P, MenuItem } from '../../types';
import Slideshow from '../Slideshow/Slideshow.component';
import Menu from '../Menu/Menu.component';

import { devices } from '../../breakpoints';

type Props = {
  pictures: P[],
  menu: MenuItem[],
  selectedMenuItemIndex: number,
  openedMenu?: boolean,
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media ${devices.mobileS} {
    overflow: auto;
  }
  @media ${devices.laptop} {
    overflow: hidden;
  }
`

const MenuContainer = styled.div<{
  openedMenu?: boolean,
}>`
  padding: 20px;
  @media ${devices.mobileS} {
    display: ${p => !p.openedMenu ? "none" : ""};
  }
  @media ${devices.laptop} {
    display: inline-block;
    min-width: 300px;
    overflow-y: auto;
  }
`

const SlideshowContainer = styled.div<{
  openedMenu?: boolean,
}>`
  width: 100%;
  @media ${devices.mobileS} {
    display: ${p => p.openedMenu ? "none" : ""};
  }
  @media ${devices.laptop} {
    display: inherit;
  }
`

export default function Page(props: Props) {
  return (
    <PageContainer>
      <MenuContainer openedMenu={props.openedMenu}>
        <Menu
          items={props.menu}
          selectedIndex={props.selectedMenuItemIndex}
        />
      </MenuContainer>
      <SlideshowContainer openedMenu={props.openedMenu}>
        <Slideshow
          pictures={props.pictures}
        />
      </SlideshowContainer>
    </PageContainer>
  )
}
