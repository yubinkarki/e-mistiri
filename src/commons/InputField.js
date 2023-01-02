import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Colors} from '@app/constants';

export default function InputField({
  labelText,
  isPassword,
  passwordIcon,
  onBlur,
  onChange,
  value,
  outlineColor = 'transparent',
}) {
  const [hidePassword, setHidePassword] = useState(isPassword);
  const [eyeIcon, setEyeIcon] = useState(passwordIcon);

  return (
    <TextInput
      theme={{roundness: 12}}
      mode="outlined"
      label={labelText}
      secureTextEntry={hidePassword}
      outlineColor={outlineColor}
      activeOutlineColor={Colors.textLink}
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      selectionColor={Colors.subtitleText}
      style={{backgroundColor: Colors.white}}
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
