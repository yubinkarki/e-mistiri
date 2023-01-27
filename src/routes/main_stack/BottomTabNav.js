import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardStack from './DashboardStack';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DashboardStack" component={DashboardStack} />
    </Tab.Navigator>
  );
}
