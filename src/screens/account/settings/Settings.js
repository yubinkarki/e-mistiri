import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import {ToggleButton} from '@app/commons';
import {LanguageSelectionCard, MenuItemData} from './components';
import {BottomPopModal, MenuCard} from '../components';
import {SettingsStyles as Styles} from '@app/assets/styles';

export default function Settings() {
  const [languagePicker, setLanguagePicker] = useState(false);
  const [notificationSwitch, setNotificationSwitch] = useState(true);
  const [darkModeSwitch, setDarkModeSwitch] = useState(false);

  const closeLanguagePicker = () => {
    setLanguagePicker(false);
  };

  const toggleLanguagePicker = () => {
    setLanguagePicker(!languagePicker);
  };

  const cardPressHandler = itemId => {
    switch (itemId) {
      // case 1:
      //   navigation.navigate('Profile');
      //   break;

      case 2:
        toggleLanguagePicker();
        break;

      default:
        break;
    }
  };

  const menuItemCard = ({item}) => (
    <MenuCard
      title={item?.text}
      leftIcon={item?.left}
      rightIcon={
        item?.id === 3 ? (
          <ToggleButton
            isSwitchOn={notificationSwitch}
            onToggleSwitch={() => setNotificationSwitch(!notificationSwitch)}
          />
        ) : item?.id === 4 ? (
          <ToggleButton
            isSwitchOn={darkModeSwitch}
            onToggleSwitch={() => setDarkModeSwitch(!darkModeSwitch)}
          />
        ) : (
          item?.right
        )
      }
      onPress={() => cardPressHandler(item?.id)}
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

      <BottomPopModal
        isModalVisible={languagePicker}
        toggleModal={toggleLanguagePicker}
        closeModal={closeLanguagePicker}>
        <LanguageSelectionCard />
      </BottomPopModal>
    </View>
  );
}
