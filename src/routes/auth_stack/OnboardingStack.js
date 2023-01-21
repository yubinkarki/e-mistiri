import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnboardingScreenOne,
  OnboardingScreenTwo,
  OnboardingScreenThree,
} from '@app/screens';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator
      name="OnboardingStack"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen
        name="OnboardingScreenOne"
        component={OnboardingScreenOne}
        options={{title: 'Onboarding'}}
      />

      <Stack.Screen
        name="OnboardingScreenTwo"
        component={OnboardingScreenTwo}
        options={{title: 'Onboarding'}}
      />

      <Stack.Screen
        name="OnboardingScreenThree"
        component={OnboardingScreenThree}
        options={{title: 'Onboarding'}}
      />
    </Stack.Navigator>
  );
}
