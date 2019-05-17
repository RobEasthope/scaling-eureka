import React from 'react';
import { Flex, Box } from 'rebass';

import NavLink from './NavLink';
import ContentWrapper from './ContentWrapper';

const Footer = () => (
  <Box bg="ink" width={1}>
    <ContentWrapper as="header" width={1}>
      <Flex
        as="nav"
        px={{ b: 3, md: 4 }}
        py={3}
        color="white"
        bg="ink"
        alignItems="center"
      >
        <Box mx="auto" />
        <NavLink to="/" ml={3}>
          Developer notes
        </NavLink>
      </Flex>
    </ContentWrapper>
  </Box>
);

export default Footer;
