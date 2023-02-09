import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {CartItem} from '../components';
import {CheckoutCard} from './components';
import {Colors} from '@app/constants';

export default function ShoppingCart() {
  const {cartProducts} = useSelector(state => state?.cart || []);

  const cartItems = ({item}) => (
    <CartItem
      title={item?.title}
      subtitle={item?.subtitle}
      price={item?.price}
      discountedPrice={item?.discountedPrice}
      image={item?.image}
      count={item?.count}
      toggle
    />
  );

  const Separator = () => <View style={Styles.separatorContainer} />;

  return (
    <View style={Styles.mainContainer}>
      <FlatList
        ItemSeparatorComponent={Separator}
        contentContainerStyle={Styles.listContainer}
        data={cartProducts}
        keyExtractor={data => data.id}
        renderItem={cartItems}
      />

      <View style={Styles.checkoutContainer}>
        <CheckoutCard />
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
});
