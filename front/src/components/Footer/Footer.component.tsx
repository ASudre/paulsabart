import React from 'react';
import styled from 'styled-components';

import { devices } from '../../breakpoints';

const FooterContainer = styled.div`
  box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 13px 20px;
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    font-size: 20px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Content = styled.div`
  font-family: Helvetica Neue, Regular;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 0.5px;
`

type Props = {
  content: string[]
}

export default function Footer(props: Props) {
  return (
    <FooterContainer>
      {props.content.map(m => (
        <ContentContainer>
          <Content key={m}>{m}</Content>
        </ContentContainer>
      ))}
    </FooterContainer>
  )
}
