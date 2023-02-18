import {BackHandler} from 'react-native';
import Toast from 'react-native-toast-message';

// To hide toast message on hardware back button press.
export default HideToastOnBack = () => {
  const backAction = () => {
    Toast.hide();
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );

  return () => backHandler?.remove();
};
