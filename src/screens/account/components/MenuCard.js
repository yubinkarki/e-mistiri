import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Images, TextStyles} from '@app/constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function MenuCard({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={Styles.leftContainer}>
        <View style={Styles.imageContainer}>{leftIcon}</View>

        <View style={Styles.textContainer}>
          <Text style={Styles.title}>{title}</Text>
          <Text style={Styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <View style={Styles.rightContainer}>{rightIcon}</View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
    backgroundColor: Colors.translucentBackground,
    borderRadius: 10,
    padding: 5,
  },
  rightContainer: {
    paddingRight: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    paddingLeft: wp('4%'),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.menuIconBackground,
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  title: {
    ...TextStyles.poppinsLargeNormal,
    color: Colors.black,
  },
  subtitle: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.gray,
    paddingTop: hp('0.4%'),
  },
});
