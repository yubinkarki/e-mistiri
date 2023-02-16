import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {PrimaryButton} from '@app/commons';
import {Colors, TextStyles} from '@app/constants';

export default function CheckoutCard({totalAmount, onPress}) {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.leftContainer}>
        <Text style={Styles.title}>Total</Text>

        <Text style={Styles.price}>{`Rs. ${totalAmount}`}</Text>
      </View>

      <View style={Styles.rightContainer}>
        <PrimaryButton
          buttonLabel="Checkout"
          buttonRadius={6}
          buttonHeight={hp('6.5%')}
          buttonWidth={wp('50%')}
          onPressHandler={onPress}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.dashboardProductCategory,
    height: hp('12%'),
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    marginTop: hp('0.5%'),
    elevation: 1,
    shadowColor: Colors.inputFieldIcon,
  },
  title: {
    color: Colors.footerText,
    ...TextStyles.poppinsExtraLargeLight,
  },
  price: {
    color: Colors.black,
    ...TextStyles.poppinsExtraLargeNormal,
  },
});
