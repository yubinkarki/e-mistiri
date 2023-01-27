import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator name="MainStack">
      <Stack.Screen
        name="BottomTabNav"
        options={{headerShown: false}}
        component={BottomTabNav}
      />

      {/* These screens do not have the bottom tab bar. */}
      <Stack.Screen />
    </Stack.Navigator>
  );
}
