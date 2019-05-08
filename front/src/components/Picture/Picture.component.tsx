import React from 'react';
import styled from 'styled-components';

import { Picture as P } from '../../types';

import { devices } from '../../breakpoints';

type Props = P & {
  selected?: boolean,
  thumbnail?: boolean,
  onClick?: (pictureName: string) => void,
}

const Image = styled.img<{
  thumbnail?: boolean,
  selected?: boolean,
}>`
  box-shadow: ${p => p.selected ? "5px 6px 4px 0 rgba(0, 0, 0, 0.16)" : "none"};
  opacity: ${p => p.selected ? 1 : 0.5};
  vertical-align: middle;
  cursor: ${p => p.thumbnail && !p.selected ? "pointer" : "auto"};
  @media ${devices.mobileS} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: ${p => p.thumbnail ? "104px;" : "505px"};
  }
`

export default (props: Props) => (<Image
  {...props}
  onClick={() => props.onClick ? props.onClick(props.src) : null}
/>)
