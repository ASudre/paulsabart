import React from 'react';
import styled from 'styled-components';

type Props = {
  artist?: string,
  title?: string,
  technique?: string,
}

const PictureInfoContainer = styled.div`
  > div {
    &:not(:first-child) {
      margin: 5px 0 0 0;
    }
  }
  width: 100%;
`

const TextFormat = styled.div`
  font-family: MicrosoftSansSerif;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  margin-right: 10px;
`

const Artist = styled(TextFormat)`
  font-size: 35px;
  letter-spacing: 0.9px;
`

const Title = styled(TextFormat)`
  font-size: 26px;
  letter-spacing: 0.7px;
  text-align: left;
`

const Technique = styled(TextFormat)`
  font-size: 20px;
  letter-spacing: 0.5px;
`

export default function PictureInfo(props: Props) {
  return (
    <PictureInfoContainer>
      <Artist>{props.artist}</Artist>
      <Title>{props.title}</Title>
      <Technique>{props.technique}</Technique>
    </PictureInfoContainer>
  )
}
