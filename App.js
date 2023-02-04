import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import {AuthStack, MainStack} from '@app/routes';
import {BlurInputFocus} from '@app/utils';

const Stack = createNativeStackNavigator();

export default function App() {
  const {isSignedIn} = useSelector(state => state?.user);

  useEffect(() => {
    BlurInputFocus();
  }, []);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isSignedIn ? (
            <Stack.Screen name="MainStack" component={MainStack} />
          ) : (
            <Stack.Screen name="AuthStack" component={AuthStack} />
          )}
        </Stack.Navigator>

        <Toast />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
