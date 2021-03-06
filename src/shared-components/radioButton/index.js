import React from 'react';
import PropTypes from 'prop-types';

import SelectorButton from '../selectorButton';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.node,
  size: PropTypes.oneOf(['large', 'small']),
};

const defaultProps = {
  onClick: () => {},
  type: 'primary',
  size: 'small',
};

const RadioButton = ({
  checked,
  onClick,
  children,
  type,
  icon,
  size,
  ...rest
}) => (
  <SelectorButton
    selector="radio"
    checked={checked}
    onClick={onClick}
    type={type}
    icon={icon}
    size={size}
    {...rest}
  >
    {children}
  </SelectorButton>
);

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;
