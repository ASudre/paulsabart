import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 13px 20px;
  text-align: left;
`

const Content = styled.div`
  font-family: Helvetica Neue, Regular;
  font-size: 20px;
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
        <Content key={m}>{m}</Content>
      ))}
    </FooterContainer>
  )
}
