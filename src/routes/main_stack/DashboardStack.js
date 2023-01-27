import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '@app/screens';

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator name="DashboardStack">
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
