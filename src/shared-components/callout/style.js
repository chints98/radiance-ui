import styled from '@emotion/styled';

import { COLORS, SPACER, TYPOGRAPHY_CONSTANTS } from '../../constants';

export const ParentContainer = styled.div`
  max-width: 327px;
`;

export const CalloutContainer = styled.div`
  background-color: ${COLORS.infoBackground};
  padding: ${SPACER.medium};
  border-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  color: ${({ color }) => color};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
`;

export const Icon = styled.div`
  margin-left: ${SPACER.small};

  svg {
    fill: ${({ color }) => color};

    path {
      fill: ${({ color }) => color};
    }
  }
`;
