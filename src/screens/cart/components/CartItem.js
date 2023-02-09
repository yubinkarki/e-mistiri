import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Images} from '@app/constants';
import {ProductCounter} from '@app/commons';
import {CartItemStyles as Styles} from '@app/assets/styles';

export default function CartItem({
  image,
  title,
  subtitle,
  price,
  discountedPrice,
  toggle,
  count,
}) {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.leftContainer}>
        <View style={Styles.imageContainer}>{image}</View>

        <View style={Styles.textContainer}>
          <Text numberOfLines={1} style={Styles.title}>
            {title || 'Product Title'}
          </Text>

          <Text numberOfLines={1} style={Styles.subtitle}>
            {subtitle || 'This is product subtitle'}
          </Text>

          <View style={Styles.priceContainer}>
            <Text numberOfLines={1} style={Styles.price}>
              {discountedPrice
                ? `Rs. ${discountedPrice}`
                : `Rs. ${price || 1000}`}
            </Text>

            {discountedPrice && (
              <Text numberOfLines={1} style={Styles.discountedPrice}>
                {`Rs. ${price}`}
              </Text>
            )}
          </View>
        </View>
      </View>

      {toggle && (
        <View style={Styles.rightContainer}>
          <TouchableOpacity style={Styles.crossContainer}>
            <Images.cross width={20} />
          </TouchableOpacity>

          <View style={Styles.counterContainer}>
            <ProductCounter value={count} />
          </View>
        </View>
      )}
    </View>
  );
}
