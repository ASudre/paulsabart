import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Header from "./Header.component";

storiesOf("Header", module)
  .add("standard", () => (
    <Header
      title="PaulSabArt"
      menu={["Accueil", "Artistes"]}
    />
  ))
