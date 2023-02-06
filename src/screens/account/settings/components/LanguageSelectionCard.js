import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles} from '@app/constants';
import LanguageOptionData from './LanguageOptionData';
import CountryCard from './CountryCard';

export default function LanguageSelectionCard() {
  const [languageData, setLanguageData] = useState(LanguageOptionData);

  const ListSeparator = () => <View style={Styles.itemSeparator} />;

  const countryListRender = ({item}) => (
    <CountryCard
      name={item.name}
      flag={item.flag}
      selectedIcon={item.selectedIcon}
      isSelected={item.isSelected}
      toggleSelected={() => {}}
    />
  );

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.title}>Select Language</Text>

      <View style={Styles.countryListContainer}>
        <FlatList
          ItemSeparatorComponent={ListSeparator}
          data={languageData}
          keyExtractor={data => data.name}
          renderItem={countryListRender}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height: hp('23.5%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: wp('7%'),
    paddingTop: hp('1.6%'),
  },
  title: {
    ...TextStyles.poppinsExtraLargerNormal,
    color: Colors.black,
    textAlign: 'center',
    fontSize: 20,
  },
  countryListContainer: {
    marginTop: hp('2%'),
  },
  itemSeparator: {
    height: hp('0.5%'),
  },
});
