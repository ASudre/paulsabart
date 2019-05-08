import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Header from "./Header.component";
import { action } from '@storybook/addon-actions';

storiesOf("Header", module)
  .add("standard", () => (
    <Header
      title="PaulSabArt"
      menu={["Accueil", "Artistes"]}
    />
  ))
  .addParameters({ viewport: { defaultViewport: 'iphone6' }})
  .add("mobile closed", () => (
    <Header
      title="PaulSabArt"
      toggleMenu={() => {
        action(`Click on menu icon`)
        console.log('clidked');
      }}
    />
  ))
  .add("mobile opened", () => (
    <Header
      title="PaulSabArt"
      opened
      toggleMenu={() => action(`Click on menu icon`)}
    />
  ))
  .add("mobile with no menu", () => (
    <Header
      title="PaulSabArt"
    />
  ))
