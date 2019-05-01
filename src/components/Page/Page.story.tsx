import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Page from './Page.component';

const styles = {
  height: '300px',
};
const FixedHeightDecorator = (props: any) => <div style={styles}>{props.children}</div>;

storiesOf("Page", module)
  .add("standard with 300px height container", () => (
    <FixedHeightDecorator>
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
          },
          {
            year: 2018,
            title: "Test1",
          },
          {
            year: 2018,
            title: "Test2",
          },
          {
            year: 2017,
            title: "Test3",
          },
          {
            year: 2017,
            title: "Test4",
          },
          {
            year: 2017,
            title: "Test5",
          }
        ]}
      />
    </FixedHeightDecorator >
  ));