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
`;

const PictureContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media ${devices.mobileS} {
    flex-direction: column;
  }
  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export default function Gallery(props: Props) {
  const PictureInfo = props.children || null;
  return (<GalleryContainer>
    {
      props.pictures.map(p =>
        <PictureContainer key={p.src}>
          {PictureInfo && (<PictureInfo
            artist={p.artist}
            title={p.title}
            technique={p.technique}
          />)}
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
