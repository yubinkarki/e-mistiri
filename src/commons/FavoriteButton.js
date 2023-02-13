import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AD from 'react-native-vector-icons/AntDesign';

import {Colors} from '@app/constants';

export default function FavoriteButton() {
  const [iconName, setIconName] = useState('hearto');

  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      onPress={() => {
        iconName === 'hearto' ? setIconName('heart') : setIconName('hearto');
      }}>
      <AD name={iconName} size={22} color={Colors.splashScreenBG} />
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    elevation: 7,
  },
});
