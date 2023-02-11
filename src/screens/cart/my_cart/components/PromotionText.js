import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles, Images} from '@app/constants';

export default function PromotionText() {
  return (
    <View style={Styles.mainContainer}>
      <Images.promotionText />

      <View>
        <Text style={Styles.ad}>
          Save Rs 324 compared to Authorised Services
        </Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('5%'),
    borderRadius: 8,
    shadowColor: Colors.dashboardProductActiveCategory,
    elevation: 10,
    borderWidth: 1,
    borderColor: Colors.dashboardProductCategory,
  },
  ad: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.gray,
    paddingLeft: wp('3%'),
  },
});
