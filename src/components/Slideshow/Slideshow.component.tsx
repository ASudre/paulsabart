import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Gallery from '../Gallery/Gallery.component';
import Picture from '../Picture/Picture.component';
import { Picture as P } from '../../types';
import PictureInfo from '../PictureInfo/PictureInfo.component';

import { devices } from '../../breakpoints';

type Props = {
  pictures: P[],
  selectedPictureSrc?: string,
}

const ScrollingContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
`

const SlideshowContainer = styled.div`
  overflow: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`

const PictureInfoContainer = styled.div`
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.laptopL} {
    display: initial;
    padding: 20px 20px 20px 60px;
  }
`

const PicturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media ${devices.tablet} {
    padding: 20px 20px 20px 0;
  }
  > div {
    &:not(:first-child) {
      margin: 0 0 0 20px;
    }
  }
`;

const PicturesContainerDesktop = styled(PicturesContainer)`
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.laptopL} {
    display: flex;
  }
`

const PicturesContainerIpad = styled(PicturesContainer)`
  @media ${devices.mobileS} {
    display: initial;
    width: 100%;
  }
  @media ${devices.laptopL} {
    display: none;
  }
`

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
      <PictureInfoContainer>
        <PictureInfo
          artist={selectedPicture.artist}
          title={selectedPicture.title}
          technique={selectedPicture.technique}
        />
      </PictureInfoContainer>
      <PicturesContainerDesktop>
        <ScrollingContainer>
          <Gallery
            pictures={pictures}
            selectedPictureSrc={selectedPictureSrc}
            thumbnails
            onClick={handleClick}
          />
        </ScrollingContainer>
        <ScrollingContainer>
          <Picture
            {...(selectedPicture)}
            selected
          />
        </ScrollingContainer>
      </PicturesContainerDesktop>
      <PicturesContainerIpad>
        <ScrollingContainer>
          <Gallery
            pictures={pictures}
            onClick={handleClick}
          >
            {PictureInfo}
          </Gallery>
        </ScrollingContainer>
      </PicturesContainerIpad>
    </SlideshowContainer>
  )
}
