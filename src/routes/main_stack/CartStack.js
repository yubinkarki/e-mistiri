import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ShoppingCart} from '@app/screens';

const Stack = createNativeStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator name="CartStack" screenOptions={{headerShown: false}}>
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
}
