import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const SplashScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.splashScreenBG,
  },
  mainLogo: {
    color: Colors.white,
  },
});
