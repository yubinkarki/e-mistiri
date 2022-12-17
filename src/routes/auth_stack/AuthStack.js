import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStack from './LoginStack';
import OnboardingStack from './OnboardingStack';
import {MainStack} from '../main_stack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    // These stacks do not have the default header.
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />

      <Stack.Screen name="LoginStack" component={LoginStack} />

      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
}
