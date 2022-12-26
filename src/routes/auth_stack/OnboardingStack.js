import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, OnboardingScreen} from '@app/screens';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator
      name="OnboardingStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{title: 'Welcome'}}
      />

      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{title: 'Onboarding'}}
      />
    </Stack.Navigator>
  );
}
