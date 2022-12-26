import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '@app/screens';

const Stack = createNativeStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator name="LoginStack" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Signup} />

      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
