import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Picture as P, MenuItem } from '../../types';
import Slideshow from '../Slideshow/Slideshow.component';
import Menu from '../Menu/Menu.component';

import { devices } from '../../breakpoints';

type Props = {
  pictures: P[],
  menu: MenuItem[],
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const MenuContainer = styled.div`
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.laptop} {
    display: inline-block;
    min-width: 300px;
    overflow-y: auto;
  }
`

const SlideshowContainer = styled.div`
  width: 100%;
  @media ${devices.mobileS} {
    overflow: auto;
    height: 100%;
  }
`

export default function Page(props: Props) {
  return (
    <PageContainer>
      <MenuContainer>
        <Menu
          items={props.menu}
          selectedIndex={0}
        />
      </MenuContainer>
      <SlideshowContainer>
        <Slideshow
          pictures={props.pictures}
        />
      </SlideshowContainer>
    </PageContainer>
  )
}
