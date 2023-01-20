import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthStack, MainStack} from '@app/routes';

export default function App() {
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({fade: true, duration: 300})}>
      <GestureHandlerRootView style={{flex: 1}}>
        <AuthStack />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
