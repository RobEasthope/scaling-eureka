import styled from 'styled-components';
import { Flex } from 'rebass';

import { breakpoints } from '../styles/theme';

const ProductImageWrapper = styled(Flex)`
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }
  @media (min-width: ${breakpoints.sm}) {
    width: ${props => (props.gridView ? '100%' : '370px')};
  }
`;

export default ProductImageWrapper;
