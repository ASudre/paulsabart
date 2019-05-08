import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Slideshow from "./Slideshow.component";

const styles = {
  height: '300px',
};
const FixedHeightDecorator = (props: any) => <div style={styles}>{props.children}</div>;

storiesOf("Slideshow", module)
  .add("standard with 300px height", () => (
    <FixedHeightDecorator>
      <Slideshow
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
        selectedPictureSrc="http://zyriane.free.fr/backend/images/2018-2019/Vie%20en%20Rose/Michel%20(Acrylique).jpg"
      />
    </FixedHeightDecorator>
  ))
  .add("Standard when no picture selected", () => (
    <Slideshow
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
    />
  ));
