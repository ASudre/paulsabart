import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MobileMebu from "./MobileMenu.component";

storiesOf("MobileMenu", module)
  .add("standard", () => (
    <MobileMebu />
  ))
