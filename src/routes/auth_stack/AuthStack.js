import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '@app/screens';
import OnboardingStack from './OnboardingStack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  const {isFirstLoad} = useSelector(state => state?.user);

  return (
    // These stacks do not have the default header.
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isFirstLoad ? (
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login', animation: 'slide_from_right'}}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{title: 'Signup', animation: 'slide_from_right'}}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
