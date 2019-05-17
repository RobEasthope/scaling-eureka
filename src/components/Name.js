import styled from 'styled-components';
import { Heading } from 'rebass';

const Name = styled(Heading)`
  &:first-letter {
    text-transform: capitalize;
  }
`;

export default Name;
