import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {Colors, Images} from '@app/constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function CommentButton({customStyles, onPressHandler}) {
  return (
    <TouchableOpacity
      style={{...Styles.mainContainer, ...customStyles}}
      activeOpacity={0.4}
      onPress={onPressHandler}>
      <Images.commentIcon />
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    height: hp('5.5%'),
    width: wp('12%'),
    backgroundColor: Colors.dashboardProductCategory,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
