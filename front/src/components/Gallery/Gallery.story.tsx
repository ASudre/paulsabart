import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Gallery from "./Gallery.component";
import { action } from '@storybook/addon-actions';

storiesOf("Gallery", module)
  .add("Thumbnails", () => (
    <Gallery
      onClick={(pictureUrl) => action(`Click on ${pictureUrl}`)}
      pictures={[{
        alt: "le bain",
        src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Cecile%20(Acrylique).jpg",
      },
      {
        alt: "terrasse",
        src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Michel%20(Acrylique).jpg",
      },
      {
        alt: "other",
        src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Yves%20(Acrylique).jpg",
      }]}
      selectedPictureSrc="http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Michel%20(Acrylique).jpg"
      thumbnails
    />
  ))
  .add("Standard", () => (
    <Gallery
      onClick={(pictureUrl) => action(`Click on ${pictureUrl}`)}
      pictures={[{
        alt: "le bain",
        src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Cecile%20(Acrylique).jpg",
      },
      {
        alt: "terrasse",
        src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Michel%20(Acrylique).jpg",
      },
      {
        alt: "other",
        src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Yves%20(Acrylique).jpg",
      }]}
      selectedPictureSrc="http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Michel%20(Acrylique).jpg"
    />
  ));