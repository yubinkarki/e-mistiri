import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles, Images} from '@app/constants';

export default function ProductCounter({
  value,
  counterPlusHandler = null,
  counterMinusHandler = null,
  customStyles,
  iconSize = 24,
}) {
  return (
    <View style={{...Styles.mainContainer, ...customStyles}}>
      <TouchableOpacity activeOpacity={0.5} onPress={counterMinusHandler}>
        <Images.counterMinus width={iconSize} />
      </TouchableOpacity>

      <Text style={Styles.text}>{value}</Text>

      <TouchableOpacity activeOpacity={0.5} onPress={counterPlusHandler}>
        <Images.counterPlus width={iconSize} />
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: hp('4.1%'),
    width: wp('22%'),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('1.1%'),
    backgroundColor: Colors.dashboardProductCategory,
  },
  text: {
    ...TextStyles.poppinsRegularNormal,
    color: Colors.textLink,
  },
});
