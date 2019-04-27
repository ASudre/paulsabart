import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Gallery from '../Gallery/Gallery.component';
import Picture from '../Picture/Picture.component';
import { Picture as P } from '../../types';
import PictureInfo from '../PictureInfo/PictureInfo.component';

type Props = {
  pictures: P[],
  selectedPictureSrc?: string,
}

const SlideshowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const PicturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  > img {
    &:not(:first-child) {
      margin: 0 0 0 20px;
    }
  }
`;

export default function Slideshow(props: Props) {
  if (props.pictures.length === 0) {
    return null;
  }
  const { pictures } = props;
  const defaultPicture = pictures[0];
  const [selectedPictureSrc, setSelectedPictureSrc] = useState(props.selectedPictureSrc || defaultPicture.src);
  const selectedPicture = pictures.find(p => p.src === selectedPictureSrc) || defaultPicture;

  const handleClick =
    (pictureSrc: string) => {
      const s = pictures.find(p => p.src === pictureSrc);
      s && setSelectedPictureSrc(s.src);
    };

  return (
    <SlideshowContainer>
      <PictureInfo
        artist={selectedPicture.artist}
        title={selectedPicture.title}
        technique={selectedPicture.technique}
      ></PictureInfo>
      <PicturesContainer>
        <Gallery
          pictures={pictures}
          selectedPictureSrc={selectedPictureSrc}
          thumbnails
          onClick={handleClick}
        />
        <Picture
          {...(selectedPicture)}
          selected
        />
      </PicturesContainer>
    </SlideshowContainer>
  )
}
