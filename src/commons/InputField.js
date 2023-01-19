import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

const Styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.inputField,
  },
  errorText: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.errorText,
    paddingLeft: wp('4.4%'),
    paddingTop: hp('0.2%'),
  },
});

export default function InputField({
  control,
  errors,
  rules,
  inputName,
  labelText,
  passwordIcon,
  isPassword = false,
  outlineColor = 'transparent',
}) {
  const [hidePassword, setHidePassword] = useState(isPassword);
  const [eyeIcon, setEyeIcon] = useState(passwordIcon);

  return (
    <>
      <Controller
        control={control}
        rules={rules}
        name={inputName}
        render={({field: {onBlur, onChange, value}}) => (
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
        )}
      />

      {errors[inputName] && (
        <Text style={Styles.errorText}>{errors[inputName]?.message}</Text>
      )}
    </>
  );
}
