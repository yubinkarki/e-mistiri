import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthStack, MainStack} from '@app/routes';

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <AuthStack />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
