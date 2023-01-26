import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {InputRules} from '../components';
import {InputField, PrimaryButton} from '@app/commons';
import {Colors, Images} from '@app/constants';
import {LoginScreenStyles as Styles} from '@app/assets/styles';

export default function Login({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginButtonHandler = loginData => {
    navigation.navigate('MainStack');
  };

  return (
    <KeyboardAwareScrollView
      style={Styles.mainContainer}
      enableOnAndroid={false}
      keyboardShouldPersistTaps="handled">
      <StatusBar backgroundColor={Colors.white} />

      <View style={Styles.topContainer}>
        <View style={Styles.mainLogoContainer}>
          <Images.mainLogoColor />
        </View>

        <Text style={Styles.titleText}>Welcome Back</Text>

        <Text style={Styles.subtitleText}>Lorem ipsum dolor sit amet</Text>
      </View>

      <View style={Styles.formContainer}>
        <View style={Styles.inputFieldContainer}>
          <InputField
            control={control}
            errors={errors}
            inputName="email"
            rules={InputRules.loginEmail}
            labelText="Email Address"
          />
        </View>

        <View style={Styles.inputFieldContainer}>
          <InputField
            control={control}
            errors={errors}
            inputName="password"
            rules={InputRules.loginPassword}
            labelText="Password"
            isPassword={true}
            passwordIcon={true}
          />
        </View>

        <TouchableOpacity onPress={() => {}}>
          <Text style={Styles.forgotPasswordLink}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={Styles.loginButtonContainer}>
          <PrimaryButton
            buttonRadius={10}
            buttonLabel="Login"
            buttonHeight={55}
            onPressHandler={handleSubmit(loginButtonHandler)}
          />
        </View>
      </View>

      <View style={Styles.footerContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.footerText}>Don't have an account? </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={Styles.footerLinkText}>Join us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
