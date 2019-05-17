import React from 'react';
import { Box, Flex, Heading } from 'rebass';

import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import Select from '../components/Select';

import { priceASC, priceDSC, stringASC } from '../utils/sorting';

const API = `${process.env.PUBLIC_URL}/products.json`;

// Filtering and sorting function
const filteredProducts = (
  productList = [],
  sizeFilter = '',
  priceFilter = 0,
  sortOrder = ''
) => {
  const filteredList = productList
    .filter(product => product.size.includes(sizeFilter))
    .filter(product => product.price.substring(1) >= priceFilter);
  // Sort orders
  if (sortOrder === 'priceASC') {
    filteredList.sort(priceASC);
  } else if (sortOrder === 'priceDSC') {
    filteredList.sort(priceDSC);
  } else if (sortOrder === 'nameASC') {
    filteredList.sort(stringASC);
  } else {
    return filteredList;
  }

  return filteredList;
};

// Filter & sorting options
const sizeFilterOptions = [
  { name: 'All sizes', value: '' },
  { name: 'Small', value: 'S - Small' },
  { name: 'Medium', value: 'M - Medium' },
  { name: 'Large', value: 'L - Large' },
  { name: 'Extra Large', value: 'XL - Extra large' },
];

const priceFilterOptions = [
  { name: 'Any price', value: '0' },
  { name: '£100+', value: '100' },
  { name: '£200+', value: '200' },
  { name: '£300+', value: '300' },
  { name: '£400+', value: '400' },
];

const sortOrderOptions = [
  { name: 'No sort order', value: '' },
  { name: 'Price ascending', value: 'priceASC' },
  { name: 'Price decending', value: 'priceDSC' },
  { name: 'Name A-Z', value: 'nameASC' },
];

const Products = () => {
  // Product list
  const [productList, setProductList] = React.useState();

  // Grid/Listing view
  const [gridView, setGridView] = React.useState(true);

  // Sorting & filtering
  const [sizeFilter, setSizeFilter] = React.useState();
  const [priceFilter, setPriceFilter] = React.useState();
  const [sortOrder, setSortOrder] = React.useState();

  // Fetch product data
  React.useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  // Handle filter and sort order selection
  const onSizeFilterChange = event => {
    setSizeFilter(event.target.value);
  };
  const onPriceFilterChange = event => {
    setPriceFilter(event.target.value);
  };
  const onSortOrderChange = event => {
    setSortOrder(event.target.value);
  };

  return (
    <React.Fragment>
      {/* Grid/Listing view selection UI */}
      <Flex width={1} mb={3} justifyContent="flex-end">
        {productList && (
          <Button as="button" onClick={() => setGridView(!gridView)}>
            Switch to {gridView ? `Listing View` : `Grid View`}
          </Button>
        )}
      </Flex>

      <Flex
        as="header"
        pb={4}
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        {/* Product count */}
        {productList && (
          <Heading width={{ b: 1 / 1, md: 'auto' }} mb={{ b: 3, md: 0 }}>
            {`${
              filteredProducts(productList, sizeFilter, priceFilter, sortOrder)
                .length
            }
            results`}
          </Heading>
        )}
        <Box mx="auto" />

        {/* Size filter selection */}
        <Select
          filterOptions={sizeFilterOptions}
          onChange={onSizeFilterChange}
          value={sizeFilter}
        />

        {/* Price filter selection */}
        <Select
          filterOptions={priceFilterOptions}
          onChange={onPriceFilterChange}
          value={priceFilter}
        />

        {/* Sort order selection */}
        <Select
          filterOptions={sortOrderOptions}
          onChange={onSortOrderChange}
          value={sortOrder}
        />

        {/* Reset filtering and sort options */}
        <Button
          as="button"
          onClick={() =>
            setSizeFilter('') && setPriceFilter(0) && setSortOrder('')
          }
        >
          Reset
        </Button>
      </Flex>

      {/* Product list */}
      <Flex
        as="ul"
        width="auto"
        px="0"
        mx="-16px"
        my="0"
        flexWrap="wrap"
        style={{ listStyleType: 'none' }}
      >
        {productList &&
          filteredProducts(productList, sizeFilter, priceFilter, sortOrder).map(
            product => (
              <ProductCard
                key={product._id}
                product={product}
                gridView={gridView}
              />
            )
          )}
      </Flex>
    </React.Fragment>
  );
};

export default Products;
