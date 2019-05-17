import React from 'react';
import { Flex, Box } from 'rebass';

import NavTitle from './NavTitle';
import NavLink from './NavLink';
import ContentWrapper from './ContentWrapper';

const Header = () => (
  <Box bg="ink" width={1}>
    <ContentWrapper as="header" width={1}>
      <Flex
        as="nav"
        px={{ b: 3, md: 4 }}
        py={3}
        color="white"
        alignItems="center"
        flexDirection="row"
      >
        <NavTitle to="/">Simple React Hooks App</NavTitle>
        <Box mx="auto" />
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/form">Form</NavLink>
      </Flex>
    </ContentWrapper>
  </Box>
);

export default Header;
