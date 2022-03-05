import React, { useState } from 'react';
import styled from 'styled-components';
import ImageViewer from 'react-simple-image-viewer';

import { Picture as P } from '../../types';
import { devices } from '../../breakpoints';

type Props = {
  pictures: P[],
  selectedPictureSrc?: string,
}

const PicturesContainer = styled.div`
  overflow-y: auto;
  padding: 5px;
`;

const Image = styled.img`
  cursor: zoom-in;
  width: 100%;
  @media ${devices.tablet} {
    width: auto;
    max-height: 200px;
    color: green;
    margin: 5px 10px 0 0;
  }
`

export default function Slideshow(props: Props) {
  if (props.pictures.length === 0) {
    return null;
  }
  const [selectedPictureIndex, setSelectedPictureIndex] = useState<number>(0);
  const [openSlideShow, setOpenSlideShow] = useState<boolean>(false);

  return (
    <>
      <PicturesContainer>
        {props.pictures.map((p, i) =>
          <Image
            alt={p.alt}
            onClick={() => {
              setSelectedPictureIndex(i);
              setOpenSlideShow(true);
            }}
            src={p.src}
          />
        )}
      </PicturesContainer>
      {openSlideShow &&
        <ImageViewer
          src={props.pictures.map((p) => p.src)}
          currentIndex={selectedPictureIndex}
          disableScroll={false}
          closeOnClickOutside
          onClose={() => setOpenSlideShow(false)}
        />
      }
    </>
  )
}
