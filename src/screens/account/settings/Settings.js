import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {MenuItemData} from './components';
import {MenuCard} from '../components';
import {SettingsStyles as Styles} from '@app/assets/styles';

export default function Settings() {
  const cardPressHandler = itemId => {
    switch (itemId) {
      // case 1:
      //   navigation.navigate('Profile');
      //   break;

      // case 2:
      //   navigation.navigate('Settings');
      //   break;

      default:
        break;
    }
  };

  const menuItemCard = ({item}) => (
    <MenuCard
      title={item.text}
      leftIcon={item.left}
      rightIcon={item.right}
      onPress={() => cardPressHandler(item.id)}
    />
  );

  const ListSeparator = () => <View style={Styles.listSeparator} />;

  return (
    <View style={Styles.mainContainer}>
      <FlatList
        data={MenuItemData}
        keyExtractor={data => data.id}
        renderItem={menuItemCard}
        contentContainerStyle={Styles.listContainer}
        ItemSeparatorComponent={ListSeparator}
      />
    </View>
  );
}
