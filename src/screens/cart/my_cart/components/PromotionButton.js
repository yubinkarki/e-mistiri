import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles} from '@app/constants';

export default function PromotionButton() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#0074DD', '#A3CEF5']}
      style={Styles.mainContainer}>
      <TouchableOpacity>
        <Text style={Styles.ad}>DENTING & PAINTING</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height: hp('4.5%'),
    width: wp('38%'),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ad: {
    ...TextStyles.poppinsSmallBold,
    color: Colors.white,
  },
});
