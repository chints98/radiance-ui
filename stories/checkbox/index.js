import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';

import CheckboxReadme from 'docs/checkbox.md';
import { Checkbox, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';
import { AcneGlyph } from 'src/svgs/glyphs';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(CheckboxReadme, () => (
    <React.Fragment>
      <Checkbox type="primary" checked>
        This is a primary checkbox
      </Checkbox>
      <Checkbox type="secondary" checked>
        This is a secondary checkbox
      </Checkbox>
      <Typography.Heading
        css={css`
          text-align: left;
          padding: ${SPACER.large} 0 ${SPACER.medium};
        `}
      >
        With Knobs
      </Typography.Heading>
      <Checkbox
        checked={boolean('checked', false)}
        type={select('type', ['primary', 'secondary'], 'primary')}
        onClick={action('checkbox clicked')}
        icon={
          boolean('icon', false) ? (
            <AcneGlyph width={40} height={40} fill="#332e54" />
          ) : null
        }
        size={select('size', ['large', 'small'], 'large')}
      >
        {text('children', 'Render checkbox label here')}
      </Checkbox>
    </React.Fragment>
  ))
);
