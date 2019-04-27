import { storiesOf } from '@storybook/react';
import * as React from 'react';
import PictureInfo from "./PictureInfo.component";

storiesOf("Picture info", module)
  .add("standard", () => (
    <PictureInfo
      artist="Michel Sudre"
      title="Véranda"
      technique="acrylique"
    />
  ))
