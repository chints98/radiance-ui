import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/core';

import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import {COLORS} from '../../constants';
import {
  OuterContainer,
  Selector,
  SelectorContainer,
  TextContainer,
  SelectorIcon,
} from './style';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  selector: PropTypes.oneOf(['radio', 'checkbox']),
  icon: PropTypes.node,
};

const defaultProps = {
  onClick: () => {
  },
  type: 'primary',
  selector: 'radio',
};

const SelectorButton = ({
  checked,
  onClick,
  children,
  type,
  selector,
  icon,
  ...rest
}) => (
  <OuterContainer
    onClick={onClick}
    onKeyPress={onClick}
    tabIndex="0"
    selector={selector}
    {...rest}
  >
    <SelectorContainer>
      <SelectorIcon>
        {checked ?
          <CheckmarkIcon
            css={css`
              color: ${COLORS.white};
            `}
            width={11}
            height={11}
          /> :
          icon
        }
      </SelectorIcon>
      <Selector type={type} checked={checked} selector={selector}/>
    </SelectorContainer>

    {children && (
      <TextContainer>{children}</TextContainer>
    )}
  </OuterContainer>
);

SelectorButton.propTypes = propTypes;
SelectorButton.defaultProps = defaultProps;

export default SelectorButton;

