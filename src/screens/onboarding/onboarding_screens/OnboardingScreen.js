import React from 'react';
import {View, Text, StatusBar} from 'react-native';

export default function OnboardingScreen() {
  return (
    <View>
      <StatusBar hidden={false} />
      <Text>OnboardingScreen</Text>
    </View>
  );
}
