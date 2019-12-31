import styled from 'styled-components';

import { TOOLBAR_BUTTON_WIDTH, TABBAR_HEIGHT } from '~/renderer/app/constants';
import { ToolbarButton } from '~/renderer/components/ToolbarButton';

export const StyledTabbar = styled.div`
  width: 100%;
  height: ${TABBAR_HEIGHT}px;
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.04);
  transition: 0.3s opacity, 0.3s transform;
`;

export const TabsContainer = styled.div`
  height: 100%;
  width: calc(100% - ${TOOLBAR_BUTTON_WIDTH}px);
  bottom: 0;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export const AddTab = styled(ToolbarButton)`
  height: ${TABBAR_HEIGHT}px;
  position: absolute;
  left: 0;
  bottom: 0;
`;
