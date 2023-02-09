import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Account} from '@app/screens';

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator name="AccountStack">
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
