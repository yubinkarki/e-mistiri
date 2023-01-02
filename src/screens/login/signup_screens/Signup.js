import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Checkbox} from 'react-native-paper';
import {Colors, Images} from '@app/constants';
import {InputField, PrimaryButton} from '@app/commons';
import {SignupScreenStyles as Styles} from '@app/assets/styles';

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [checked, setChecked] = useState(false);

  const signupSubmitHandler = signupData => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAwareScrollView
      style={Styles.mainContainer}
      enableOnAndroid={false}
      keyboardShouldPersistTaps="handled">
      <StatusBar backgroundColor={Colors.loginBackground} />

      <View style={Styles.topContainer}>
        <View style={Styles.mainLogoContainer}>
          <Images.mainLogoColor />
        </View>

        <Text style={Styles.titleText}>Create a New Account</Text>

        <Text style={Styles.subtitleText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}
