import {Keyboard} from 'react-native';

// To blur all input focus on hardware back button press.
export default BlurInputFocus = () => {
  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
      Keyboard.dismiss();
    },
  );

  return () => {
    keyboardDidHideListener?.remove();
  };
};
