import React from 'react';
import styled from 'styled-components';

import Picture from '../Picture/Picture.component';
import { Picture as P } from '../../types';

type Props = {
  pictures: P[],
  selectedPictureSrc: string,
  thumbnails?: boolean,
  onClick: (pictureUrl: string) => void,
}

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const PictureContainer = styled.div`
  padding-bottom: 20px;
`;

export default function Gallery(props: Props) {
  return (<GalleryContainer>
    {
      props.pictures.map(p =>
        <PictureContainer key={p.src}>
          <Picture
            {...p}
            thumbnail={props.thumbnails}
            selected={props.selectedPictureSrc === p.src}
            onClick={props.onClick}
          />
        </PictureContainer>)
    }
  </GalleryContainer>);
}
