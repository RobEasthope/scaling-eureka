import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../styles/theme';

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 32px;

  &:hover {
    color: ${colors.warmRed};
  }
`;

export default NavLink;
