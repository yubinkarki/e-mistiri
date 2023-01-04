import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '@app/constants';

const Styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.white,
  },
});

export default function InputField({
  labelText,
  isPassword,
  passwordIcon,
  outlineColor = 'transparent',
  onBlur,
  onChange,
  value,
}) {
  const [hidePassword, setHidePassword] = useState(isPassword);
  const [eyeIcon, setEyeIcon] = useState(passwordIcon);

  return (
    <TextInput
      theme={{roundness: 12}}
      mode="outlined"
      placeholder={labelText}
      secureTextEntry={hidePassword}
      outlineColor={outlineColor}
      activeOutlineColor={Colors.textLink}
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      selectionColor={Colors.subtitleText}
      style={Styles.textInput}
      right={
        passwordIcon && (
          <TextInput.Icon
            forceTextInputFocus={false}
            icon={eyeIcon ? 'eye-off-outline' : 'eye'}
            color={Colors.inputFieldIcon}
            onPress={() => {
              setHidePassword(!hidePassword);
              setEyeIcon(!eyeIcon);
            }}
          />
        )
      }
    />
  );
}
