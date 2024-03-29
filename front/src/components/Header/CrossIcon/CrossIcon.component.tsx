import React from 'react';
import styled from 'styled-components';

const CrossContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.3em;
    cursor: pointer;
  }
  div:after {
    content: '╳';
  }
`

export default function Cross() {
  return (
    <CrossContainer>
      <div></div>
    </CrossContainer>
  )
}
