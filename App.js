import {useSelector} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack, MainStack} from '@app/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  const {isSignedIn} = useSelector(state => state?.user);

  const hideSplash = () => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 800);
  };

  return (
    <NavigationContainer onReady={hideSplash}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isSignedIn ? (
            <Stack.Screen name="MainStack" component={MainStack} />
          ) : (
            <Stack.Screen name="AuthStack" component={AuthStack} />
          )}
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
