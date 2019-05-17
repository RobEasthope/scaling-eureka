import styled from 'styled-components';
import { Box } from 'rebass';
import { colors } from '../styles/theme';

const Content = styled(Box)`
  background-color: ${colors.ink};
  color: white;
  padding: 0.5em 1em;
  border: none;
`;

export default Content;
