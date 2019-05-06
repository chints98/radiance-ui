import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { ANIMATION, COLORS, SPACER, BOX_SHADOWS } from '../../constants';

const primaryStyles = css`
  background-color: ${COLORS.purple};
  border-color: ${COLORS.purple};
  color: ${COLORS.white};
  fill: ${COLORS.white};
  &:visited,
  &:hover {
    opacity: 0.8;
  }
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    color: ${COLORS.white};
  }
`;

const secondaryStyles = loading => css`
  background-color: transparent;
  border-color: ${COLORS.purple};
  color: ${COLORS.purple};
  fill: ${COLORS.purple};

  &:hover,
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    background-color: ${loading ? 'inherit' : COLORS.primary};
    color: ${loading ? COLORS.primary : COLORS.white};
    fill: ${loading ? 'inherit' : COLORS.white};
  }
`;

const tertiaryStyles = css`
  border-color: transparent;
  background-color: transparent;
  color: ${COLORS.primary};

  &:hover {
    opacity: 0.8;
    background-color: transparent;
  }
`;

const quaternaryStyles = css`
  border-color: transparent;
  background-color: transparent;
  color: ${COLORS.purple70};
  fill: ${COLORS.purple70};

  &:hover {
    opacity: 0.8;
    background-color: transparent;
  }
`;

const actionStyles = loading => css`
  border-width: 1px;
  border-color: ${COLORS.border};
  background-color: ${COLORS.white};
  color: ${COLORS.purple100};
  fill: ${COLORS.purple100};
  box-shadow: ${loading ? 'none' : BOX_SHADOWS.clickable};

  &:hover {
    box-shadow: ${loading ? 'none' : BOX_SHADOWS.clickableHover};
  }
`;

const loadingStyles = css`
  cursor: not-allowed;

  &:hover {
    opacity: 1;
  }
`;

const disabledStyles = css`
  background-color: ${COLORS.disabled};
  border-color: ${COLORS.disabled};
  color: ${COLORS.textDisabled};
  cursor: not-allowed;
  fill: ${COLORS.textDisabled};

  &:visited,
  &:hover {
    opacity: 1;
    color: ${COLORS.textDisabled};
  }
`;

function parseTheme(disabled, buttonType, loading) {
  if (disabled) {
    return disabledStyles;
  }

  switch (buttonType) {
    case 'secondary':
      return secondaryStyles(loading);
    case 'tertiary':
      return tertiaryStyles;
    case 'quaternary':
      return quaternaryStyles;
    case 'action':
      return actionStyles(loading);
    default:
      return primaryStyles;
  }
}

export const baseButtonStyles = ({
  disabled,
  buttonType,
  loading,
  textColor,
}) => css`
  ${TYPOGRAPHY_STYLE.button};
  appearance: none;
  border-radius: 0;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  display: block;
  margin: 0;
  max-width: 325px;
  min-height: 52px;
  min-width: 208px;
  opacity: 1;
  padding: 0 ${SPACER.large};
  position: relative;
  transition: all ${ANIMATION.defaultTiming} ease-in-out;
  text-decoration: none;
  width: max-content;

  &:hover {
    transition: all ${ANIMATION.defaultTiming} ease-in-out;
  }

  &:active,
  &:focus {
    outline: none;
  }

  ${parseTheme(disabled, buttonType, loading)};
  ${loading && loadingStyles};

  ${!!textColor &&
    !disabled &&
    `
    color: ${textColor};
    fill: ${textColor};
  `};
`;

export const ButtonBase = styled.button(baseButtonStyles);

export const ButtonContents = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: ${SPACER.medium} 0;
  transition: transform ${ANIMATION.defaultTiming};
  width: 100%;

  ${({ loading, hasIcon }) => {
    if (loading && hasIcon) {
      return css`
        transform: translateX(-30px);
      `;
    }

    if (loading && !hasIcon) {
      return css`
        transform: translateX(-15px);
      `;
    }

    return css`
      transform: translateX(0);
    `;
  }};

  & > svg {
    opacity: ${({ loading }) => (loading ? 0 : 1)};
    transition: opacity ${ANIMATION.defaultTiming};
    margin-right: ${SPACER.medium};
    margin-top: -5px;
  }
`;

export const ButtonText = styled.span`
  line-height: 1.5;
  margin: 0;
  padding-top: 2px;

  ${({ loading, hasIcon }) => {
    if (loading && !hasIcon) {
      return css`
        padding-left: ${SPACER.medium};
      `;
    }
  }};
`;
