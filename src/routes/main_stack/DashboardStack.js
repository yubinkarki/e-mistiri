import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Dashboard} from '@app/screens';

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator name="DashboardStack" screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        // options={{animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
}
