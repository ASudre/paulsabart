import React from 'react';
import styled from 'styled-components';

import Picture from '../Picture/Picture.component';
import { Picture as P } from '../../types';

import { devices } from '../../breakpoints';

type Props = {
  pictures: P[],
  selectedPictureSrc?: string,
  thumbnails?: boolean,
  onClick: (pictureUrl: string) => void,
  children?: any,
}

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > * {
    &:not(:first-child) {
      margin: 20px 0 0 0;
    }
  }
`;

const PictureContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media ${devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export default function Gallery(props: Props) {
  return (<GalleryContainer>
    {
      props.pictures.map(p =>
        <PictureContainer key={p.src}>
          <Picture
            {...p}
            thumbnail={props.thumbnails}
            selected={props.selectedPictureSrc ? props.selectedPictureSrc === p.src: true}
            onClick={props.onClick}
          />
        </PictureContainer>)
    }
  </GalleryContainer>);
}
