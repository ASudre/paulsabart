import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Cross from "./Cross.component";

storiesOf("Cross", module)
  .add("standard", () => (
    <Cross />
  ))
