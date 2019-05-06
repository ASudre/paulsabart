import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MobileHeader from "./MobileHeader.component";

storiesOf("MobileHeader", module)
  .add("standard", () => (
    <MobileHeader
      title="PaulSabArt"
      menu={["Accueil", "Artistes"]}
    />
  ))
