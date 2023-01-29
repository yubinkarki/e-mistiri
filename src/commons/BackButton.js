import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AD from 'react-native-vector-icons/AntDesign';
import {Colors} from '@app/constants';

export default function BackButton({onPress}) {
  return (
    <View>
      <TouchableOpacity
        style={Styles.backButton}
        onPress={onPress}
        activeOpacity={0.5}>
        <AD name="left" size={22} color={Colors.splashScreenBG} />
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  backButton: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    elevation: 7,
  },
});
