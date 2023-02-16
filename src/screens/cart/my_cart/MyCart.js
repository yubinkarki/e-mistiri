import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {PrimaryButton} from '@app/commons';
import {Colors, TextStyles} from '@app/constants';
import {CartItem} from '../components';
import {BillCard, PromotionCard, PromotionText} from './components';
import {totalCount, totalAmount} from '@app/utils';

export default function MyCart({navigation}) {
  const {cartProducts} = useSelector(state => state?.cart || []);

  const cartItems = ({item}) => (
    <CartItem
      title={item?.title}
      subtitle={item?.subtitle}
      price={item?.price}
      discountedPrice={item?.discountedPrice}
      image={item?.image}
      count={item?.count}
    />
  );

  const FlatListFooterComponent = () => (
    <View style={Styles.promotionContainer}>
      <PromotionText />

      <View style={Styles.promotionCardContainer}>
        <PromotionCard />
      </View>
    </View>
  );

  const Separator = () => <View style={Styles.separatorContainer} />;

  const checkoutHandler = () => {
    Array.isArray(cartProducts) && cartProducts.length
      ? Alert.alert(
          'Happy Shopping',
          'Your order has been placed successfully',
          [
            {
              text: 'Got It',
              onPress: () => navigation.navigate('DashboardStack'),
            },
          ],
          {
            cancelable: true,
            onDismiss: () => navigation.navigate('DashboardStack'),
          },
        )
      : null;
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topContainer}>
        {Array.isArray(cartProducts) && cartProducts.length ? (
          <FlatList
            ItemSeparatorComponent={Separator}
            ListFooterComponent={FlatListFooterComponent}
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

            <FlatListFooterComponent />
          </View>
        )}
      </View>

      <View style={Styles.bottomContainer}>
        <View style={Styles.billContainer}>
          <BillCard
            count={totalCount(cartProducts)}
            totalAmount={totalAmount(cartProducts)}
          />
        </View>

        <View style={Styles.buttonContainer}>
          <PrimaryButton
            buttonHeight={hp('7%')}
            buttonRadius={6}
            buttonLabel="Proceed to Checkout"
            onPressHandler={checkoutHandler}
            disabled={!cartProducts.length ? true : undefined}
          />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topContainer: {
    height: '75.5%',
  },
  promotionContainer: {
    marginTop: hp('2.6%'),
  },
  promotionCardContainer: {
    marginTop: hp('2.6%'),
  },
  bottomContainer: {
    position: 'absolute',
    alignSelf: 'center',
    width: wp('90%'),
    bottom: hp('1.2%'),
  },
  buttonContainer: {
    marginTop: 10,
  },
  separatorContainer: {
    height: hp('2.6%'),
  },
  listContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('3%'),
    paddingBottom: hp('8%'),
  },
  emptyListContainer: {
    height: hp('67%'),
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
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
    paddingTop: hp('1%'),
    marginBottom: hp('5%'),
    paddingHorizontal: wp('15%'),
  },
});
