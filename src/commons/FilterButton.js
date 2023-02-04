import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Images} from '@app/constants';

export default function FilterButton() {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      onPress={() => {}}
      activeOpacity={0.6}>
      <Images.filterIcon />
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.textLink,
    borderRadius: 10,
    width: wp('13%'),
    height: hp('6.2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
