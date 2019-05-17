import React from 'react';
import { Box } from 'rebass';

const Select = ({ filterOptions, onChange, value }) => (
  <Box
    as="select"
    width={{ b: 1 / 1, md: 'auto' }}
    mr={3}
    mb={{ b: 3, md: 0 }}
    onChange={onChange}
    value={value}
  >
    {filterOptions.map(option => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </Box>
);

export default Select;
