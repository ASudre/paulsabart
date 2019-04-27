import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Page from './Page.component';

storiesOf("Page", module)
  .add("standard", () => (
    <Page
      pictures={[{
        alt: "le bain",
        src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Cecile%20(Acrylique).jpg",
      },
      {
        alt: "terrasse",
        src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Michel%20(Acrylique).jpg",
        artist: "Michel Sudre",
        title: "Véranda",
        technique: "acrylique",
      },
      {
        alt: "other",
        src: "http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Yves%20(Acrylique).jpg",
      }]}
      menu={[
        {
          year: 2019,
          title: "Toulouse Lautrec"
        },
        {
          year: 2019,
          title: "Photos anciennes"
        },
        {
          year: 2018,
          title: "Vie en rose",
        }
      ]}
    />
  ));