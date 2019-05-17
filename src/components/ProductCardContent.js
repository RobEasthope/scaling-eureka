import styled from 'styled-components';
import { Flex } from 'rebass';

import { breakpoints } from '../styles/theme';

const ProductCardContent = styled(Flex)`
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.sm}) {
    flex-wrap: ${props => (props.gridView ? 'wrap' : 'nowrap')};
  }
`;

export default ProductCardContent;
