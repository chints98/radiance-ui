import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import IconReadme from 'docs/icon.md';
import { Typography } from 'src/shared-components';
import { COLORS, SPACING } from 'src/constants';
import CameraIcon from 'src/svgs/icons/camera-icon.svg';

import IconList from './IconLibrary';

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(IconReadme, () => (
    <React.Fragment>
      <div css="text-align: left;">
        <CameraIcon width={16} height={16} />
      </div>
      <Typography.Heading css={`text-align: left; padding: ${SPACING.base} 0 ${SPACING.small};`}>
        With Knobs
      </Typography.Heading>
      <div css="text-align: left;">
        <CameraIcon
          width={number('width', 16)}
          height={number('height', 16)}
          fill={text('Icon fill color', COLORS.primary)}
          inline={boolean('inline display option', undefined)}
          rotate={number('Rotation degrees', 0)}
          className={text('additional css class names', '')}
        />
      </div>
    </React.Fragment>
  ))
);

stories.add('Icon Library', () => (
  <IconList />
));