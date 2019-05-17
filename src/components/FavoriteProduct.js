import styled from 'styled-components';
import { Box } from 'rebass';
import { colors } from '../styles/theme';

const FavoriteProduct = styled(Box)`
  border: 2px solid ${colors.warmRed};
  border-radius: 50%;
  padding: 10px;
  width: 3em;
  height: 3em;

  position: absolute;
  top: 0.75em;
  right: 0.75em;

  svg {
    height: 1.5em;
    width: auto;
    color: ${colors.warmRed};
    transform: translateY(0.1em);
  }
`;

export default FavoriteProduct;
