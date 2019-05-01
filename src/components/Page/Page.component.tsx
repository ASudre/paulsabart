import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Picture as P, MenuItem } from '../../types';
import Slideshow from '../Slideshow/Slideshow.component';
import Menu from '../Menu/Menu.component';

type Props = {
  pictures: P[],
  menu: MenuItem[],
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const SlideshowContainer = styled.div`
  width: 100%;
  padding: 80px 0 0 120px;
`

export default function Page(props: Props) {
  return (
    <PageContainer>
      <Menu
        items={props.menu}
        selectedIndex={0}
      />
      <SlideshowContainer>
        <Slideshow
          pictures={props.pictures}
        />
      </SlideshowContainer>
    </PageContainer>
  )
}
