import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles} from '@app/constants';

export default function SmallProductCard({data, onPressHandler}) {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      activeOpacity={0.84}
      onPress={onPressHandler}>
      <View style={Styles.imageContainer}>
        {<data.images height="90%" width="90%" />}
      </View>

      <View style={Styles.textContainer}>
        <Text style={Styles.title} numberOfLines={1}>
          {data?.title || 'Title'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    height: hp('14%'),
    width: wp('22%'),
    marginBottom: hp('4%'),
  },
  imageContainer: {
    height: hp('11%'),
    backgroundColor: Colors.productCardBackground,
    alignItems: 'center',
    elevation: 5,
    shadowColor: Colors.checkBox,
    justifyContent: 'center',
    borderRadius: 15,
  },
  textContainer: {
    paddingTop: hp('0.8%'),
  },
  title: {
    ...TextStyles.poppinsRegularNormal,
    color: Colors.black,
    textAlign: 'center',
    fontSize: 12,
  },
});
