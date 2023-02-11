import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

import {increaseCount, decreaseCount, removeCartItem} from '@app/redux/slices';
import {CartItem} from '../components';
import {CheckoutCard} from './components';
import {Colors, TextStyles} from '@app/constants';
import {ShowToast, totalAmount} from '@app/utils';

export default function ShoppingCart({navigation}) {
  const dispatch = useDispatch();

  const {cartProducts} = useSelector(state => state?.cart || []);

  const counterIncrement = itemId => {
    dispatch(increaseCount(itemId));
  };

  const counterDecrement = itemId => {
    dispatch(decreaseCount(itemId));
  };

  const removeCartItemHandler = itemId => {
    dispatch(removeCartItem(itemId));

    ShowToast({
      type: 'success',
      title: 'Success',
      subtitle: 'Item removed successfully',
    });
  };

  const checkoutHandler = () => {
    navigation.navigate('MyCart');

    Toast.hide();
  };

  const cartItems = ({item}) => (
    <CartItem
      title={item?.title}
      subtitle={item?.subtitle}
      price={item?.price}
      discountedPrice={item?.discountedPrice}
      image={item?.image}
      count={item?.count}
      counterPlusHandler={() => counterIncrement(item?.id)}
      counterMinusHandler={() => counterDecrement(item?.id)}
      removeCartItemHandler={() => removeCartItemHandler(item?.id)}
      toggle
    />
  );

  const Separator = () => <View style={Styles.separatorContainer} />;

  return (
    <View style={Styles.mainContainer}>
      {Array.isArray(cartProducts) && cartProducts.length ? (
        <FlatList
          ItemSeparatorComponent={Separator}
          contentContainerStyle={Styles.listContainer}
          data={cartProducts}
          keyExtractor={data => data.id}
          renderItem={cartItems}
        />
      ) : (
        <View style={Styles.emptyListContainer}>
          <Text style={Styles.emptyTitle}>No item in cart</Text>

          <Text style={Styles.emptySubtitle}>
            Add some from product details screen
          </Text>
        </View>
      )}

      <View style={Styles.checkoutContainer}>
        <CheckoutCard
          totalAmount={totalAmount(cartProducts)}
          onPress={checkoutHandler}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  listContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('3%'),
    paddingBottom: hp('8%'),
  },
  checkoutContainer: {
    marginBottom: hp('7.5%'),
    paddingHorizontal: wp('5%'),
  },
  separatorContainer: {
    height: hp('2.6%'),
  },
  emptyListContainer: {
    height: hp('68.7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    ...TextStyles.poppinsExtraLargeBold,
    color: Colors.editProfileInputLabel,
    fontSize: 30,
    textAlign: 'center',
  },
  emptySubtitle: {
    ...TextStyles.poppinsExtraLargeBold,
    color: Colors.inputFieldOutline,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: hp('5%'),
    paddingHorizontal: wp('15%'),
  },
});
