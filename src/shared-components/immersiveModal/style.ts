import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Typography from '../typography';
import {
  COLORS,
  MEDIA_QUERIES,
  SPACER,
  Z_SCALE,
  ANIMATION,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z_SCALE.modal};
  overflow-y: auto;
  background-color: rgba(58, 55, 75, 0.7);
  transition: opacity ${ANIMATION.defaultTiming}
    cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entering,
  &.exiting,
  &.exited {
    opacity: 0;
  }

  &.entered {
    opacity: 1;
  }

  ${MEDIA_QUERIES.mdUp} {
    overflow-y: hidden;
  }
`;

export const CrossIconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  z-index: ${Z_SCALE.e2000};
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: ${COLORS.white};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;

  ${MEDIA_QUERIES.mdUp} {
    top: 16px;
    right: 16px;
  }
`;

export const HeaderImageContainer = styled.div`
  min-height: 240px;
  max-height: 240px;
  width: 100%;

  img {
    min-height: 240px;
    max-height: 240px;
    width: 100%;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }

  ${MEDIA_QUERIES.mdUp} {
    min-height: 264px;
    max-height: 264px;

    img {
      height: 264px;
      max-height: 264px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
`;

export const ModalTitle = styled(Typography.Heading)`
  margin-bottom: ${SPACER.small};
`;

export const ModalBody = styled.div`
  p {
    margin-bottom: ${SPACER.large};

    &:last-of-type {
      margin-bottom: ${SPACER.xlarge};
    }
  }
`;

export const ModalFooter = styled.div`
  margin-bottom: ${SPACER.xlarge};
`;

const commonHeaderBarStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_SCALE.modal + 1};
  width: 100%;
  background: ${COLORS.white};
  color: ${COLORS.primary};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid ${COLORS.border};
  pointer-events: none;
`;

export const MobileHeaderBar = styled.div<{ showMobileHeaderBar: boolean }>`
  ${commonHeaderBarStyles};

  transition: opacity ${ANIMATION.defaultTiming}
    ${({ showMobileHeaderBar }): string =>
    showMobileHeaderBar ? 'ease-out' : 'ease-in'};
  opacity: ${({ showMobileHeaderBar }): number =>
    showMobileHeaderBar ? 1 : 0};

  ${MEDIA_QUERIES.mdUp} {
    display: none;
  }
`;

export const DesktopHeaderBar = styled.div<{ showDesktopHeaderBar: boolean }>`
  ${commonHeaderBarStyles};

  top: 56px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: none;

  transition: opacity ${ANIMATION.defaultTiming}
    ${({ showDesktopHeaderBar }): string =>
    showDesktopHeaderBar ? 'ease-out' : 'ease-in'};

  opacity: ${({ showDesktopHeaderBar }): number =>
    showDesktopHeaderBar ? 1 : 0};

  ${MEDIA_QUERIES.mdUp} {
    display: flex;

    ${CrossIconContainer} {
      top: 8px;
    }
  }
`;

export const MobileTopOverlay = styled.div`
  width: 100%;
  background: transparent;
  height: 32px;

  ${MEDIA_QUERIES.mdUp} {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  transition: transform ${ANIMATION.defaultTiming}
    cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entered {
    transform: translateY(0%);
  }

  &.entering,
  &.exiting,
  &.exited {
    transform: translateY(100%);
  }

  & > div.modal-offclick-wrapper {
    height: 100%;
  }

  ${MEDIA_QUERIES.mdUp} {
    width: 616px;

    & > div.modal-offclick-wrapper {
      height: calc(100% - 112px);
    }
  }
`;

type HasHeaderImageProps = {
  hasHeaderImage: boolean;
};

// 32px comes from top overlay
// 272px comes from 32px top overlay + 240px image
export const MainModalContentContainer = styled.div<HasHeaderImageProps>`
  position: relative;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  box-shadow: 0px -8px 24px rgba(51, 46, 84, 0.05);
  background: ${COLORS.white};
  height: ${({ hasHeaderImage }): string =>
    hasHeaderImage ? 'calc(100% - 272px)' : 'calc(100% - 32px)'};

  ${MEDIA_QUERIES.mdUp} {
    box-shadow: 0px 8px 24px rgba(51, 46, 84, 0.05);
    border-radius: 8px;
    margin-top: 56px;
    overflow-y: auto;
    height: 100%;
  }
`;

export const ContentWithFooterContainer = styled.div<HasHeaderImageProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 100%;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background: ${COLORS.white};
  padding: ${({ hasHeaderImage }): string =>
    hasHeaderImage
      ? `${SPACER.xlarge} ${SPACER.large} 0`
      : `${SPACER.x4large} ${SPACER.large} 0`};

  ${MEDIA_QUERIES.mdUp} {
    padding: ${({ hasHeaderImage }): string =>
    hasHeaderImage
      ? `${SPACER.x2large} ${SPACER.x4large} 0`
      : `72px ${SPACER.x2large} 0`};
    min-height: ${({ hasHeaderImage }): string =>
    hasHeaderImage ? 'calc(100% - 264px)' : '100%'};
  }
`;
