import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Picture from "./Picture.component";
import { action } from '@storybook/addon-actions';

storiesOf("Picture", module)
  .add("When not selected", () => (
    <Picture
      alt="alt"
      src="http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Cecile%20(Acrylique).jpg"
      onClick={(pictureUrl) => {action(`Click on ${pictureUrl}`)}}
    />
  ))
  .add("When selected", () => (
    <Picture
      alt="alt"
      src="http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Cecile%20(Acrylique).jpg"
      selected
    />
  ))
  .add("When in Gallery", () => (
    <Picture
      alt="alt"
      src="http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Cecile%20(Acrylique).jpg"
      thumbnail
    />
  ))
  .add("When in Gallery and selected", () => (
    <Picture
      alt="alt"
      src="http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Cecile%20(Acrylique).jpg"
      thumbnail
      selected
    />
  ))