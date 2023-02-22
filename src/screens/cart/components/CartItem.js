import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {GetImage} from '@app/utils';
import {Images} from '@app/constants';
import {ProductCounter} from '@app/commons';
import {CartItemStyles as Styles} from '@app/assets/styles';

export default function CartItem({
  image,
  title,
  subtitle,
  price,
  discountedPrice,
  counterPlusHandler,
  counterMinusHandler,
  removeCartItemHandler,
  toggle,
  count,
}) {
  const CartItemImage = GetImage(image);

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.leftContainer}>
        <View style={Styles.imageContainer}>
          {<CartItemImage height="90%" width="90%" />}
        </View>

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

      {toggle ? (
        <View style={Styles.rightContainer}>
          <TouchableOpacity
            style={Styles.crossContainer}
            onPress={removeCartItemHandler}>
            <Images.cross width={20} />
          </TouchableOpacity>

          <View style={Styles.counterContainer}>
            <ProductCounter
              value={count}
              counterPlusHandler={counterPlusHandler}
              counterMinusHandler={counterMinusHandler}
            />
          </View>
        </View>
      ) : (
        <View style={Styles.countContainer}>
          <Text style={Styles.count}>{count}</Text>
        </View>
      )}
    </View>
  );
}
