import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Colors, TextStyles} from '@app/constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function CountryCard({
  name,
  flag,
  selectedIcon,
  isSelected,
  toggleSelected,
}) {
  const NotSelected = () => <View style={Styles.notSelectedContainer} />;

  return (
    <TouchableOpacity
      style={
        isSelected
          ? {...Styles.mainContainer, borderColor: Colors.textLink}
          : Styles.mainContainer
      }
      activeOpacity={0.5}
      onPress={toggleSelected}>
      <View>{isSelected ? selectedIcon : <NotSelected />}</View>

      <View>
        <Text style={Styles.language}>{name}</Text>
      </View>

      <View>{flag}</View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    height: hp('6.5%'),
    borderWidth: 1,
    borderColor: Colors.countryCardBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  language: {
    ...TextStyles.poppinsExtraLargerLight,
    color: Colors.black,
    fontSize: 18,
  },
  notSelectedContainer: {
    width: wp('5%'),
  },
});
