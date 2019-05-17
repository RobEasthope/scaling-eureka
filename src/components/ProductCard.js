import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from 'rebass';
import ReactStars from 'react-stars';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { colors } from '../styles/theme';

import Name from './Name';
import PriceText from './PriceText';
import OldPriceText from './OldPriceText';
import ProductImageWrapper from './ProductImageWrapper';
import ProductCardBorder from './ProductCardBorder';
import ProductCardContent from './ProductCardContent';
import FavoriteProduct from './FavoriteProduct';

function sterlingConverter(cost) {
  return `£${cost.substring(1)}`;
}

const ProductCard = ({ product, gridView }) => {
  const {
    name,
    url,
    oldPrice,
    price,
    savings,
    rating,
    size,
    picture,
    isFav,
  } = product;

  return (
    <Box
      as="li"
      width={gridView ? { b: 1 / 1, sm: 1 / 2, lg: 1 / 3 } : { b: 1 / 1 }}
      pb="4"
      px={3}
    >
      <ProductCardBorder>
        <a href={url.replace('.html', '')}>
          <ProductCardContent flexDirection="row" gridView={gridView}>
            <ProductImageWrapper
              width={1}
              bg="#ccc"
              gridView={gridView}
              justifytems="center"
              alignItems="center"
            >
              <FavoriteProduct>
                {isFav ? <FaHeart /> : <FaRegHeart />}
              </FavoriteProduct>

              <img src={picture} style={{ maxWidth: '100%' }} alt="name" />
            </ProductImageWrapper>
            <Box p={3} pb={4} width={1}>
              <Name fontSize={[3]}>{name}</Name>
              <Flex my={2}>
                {size && (
                  <Text mr={2} fontFamily="serif">
                    {size}
                  </Text>
                )}
                {rating && (
                  <ReactStars
                    count={rating}
                    size={16}
                    color1={colors.warmRed}
                    color2={colors.warmRed}
                  />
                )}
              </Flex>
              <Flex alignItems="flex-end" flexWrap="wrap">
                {price && (
                  <PriceText fontSize={[4]}>
                    {sterlingConverter(price)}
                  </PriceText>
                )}
                {oldPrice && (
                  <OldPriceText color="grey" mr="2">
                    {sterlingConverter(oldPrice)}
                  </OldPriceText>
                )}
                {savings && (
                  <Text
                    mr="2"
                    width={{ b: 1 / 1, sm: 'auto' }}
                    color={colors.warmRed}
                  >
                    You save {sterlingConverter(savings)}
                  </Text>
                )}
              </Flex>
            </Box>
          </ProductCardContent>
        </a>
      </ProductCardBorder>
    </Box>
  );
};

ProductCard.defaultProps = {
  product: {},
  gridView: true,
};

ProductCard.propTypes = {
  product: PropTypes.object,
  gridView: PropTypes.bool,
};

export default ProductCard;
