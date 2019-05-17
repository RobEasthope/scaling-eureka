import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../styles/theme';

const NavTitle = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${colors.warmRed};
  }
`;

export default NavTitle;
