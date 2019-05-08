import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Footer from "./Footer.component";

storiesOf("Footer", module)
  .add("standard", () => (
    <Footer
      content={["Toulouse", "Université Paul Sabatier", "Villa du SCAS de 17h à 20h"]}
    />
  ))
