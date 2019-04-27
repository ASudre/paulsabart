import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Menu from "./Menu.component";

storiesOf("Menu", module)
  .add("standard", () => (
    <Menu
      items={[
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
      selectedIndex={1}
    />
  ))
