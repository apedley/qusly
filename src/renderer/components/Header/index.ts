import styled from 'styled-components';

import { transparency } from '~/renderer/constants';
import { robotoMedium } from '~/renderer/mixins';

export const Header = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, ${transparency.text.medium});
  ${robotoMedium()};
`;
