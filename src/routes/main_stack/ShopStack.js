import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Shop} from '@app/screens';

const Stack = createNativeStackNavigator();

export default function ShopStack() {
  return (
    <Stack.Navigator name="ShopStack" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Shop" component={Shop} />
    </Stack.Navigator>
  );
}
