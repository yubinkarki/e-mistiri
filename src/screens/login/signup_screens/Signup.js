import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Checkbox} from 'react-native-paper';
import {inputRules} from '../components';
import {Colors, Images} from '@app/constants';
import {InputField, PrimaryButton} from '@app/commons';
import {SignupScreenStyles as Styles} from '@app/assets/styles';

export default function Signup({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [checked, setChecked] = useState(false);

  const signupSubmitHandler = signupData => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView
      style={Styles.mainContainer}
      keyboardShouldPersistTaps="handled">
      <StatusBar backgroundColor={Colors.white} />

      <View style={Styles.topContainer}>
        <View style={Styles.mainLogoContainer}>
          <Images.mainLogoColor />
        </View>

        <Text style={Styles.titleText}>Create a New Account</Text>

        <Text style={Styles.subtitleText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
      </View>

      <View style={Styles.formContainer}>
        <View style={Styles.inputFieldContainer}>
          <Controller
            control={control}
            name="email"
            rules={{...inputRules.email}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputField
                labelText="Email Address"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          {errors?.email?.type === 'required' ? (
            <Text style={Styles.errorText}>Enter your email</Text>
          ) : errors?.email?.type === 'pattern' ? (
            <Text style={Styles.errorText}>Enter a valid email address</Text>
          ) : null}
        </View>

        <View style={Styles.inputFieldContainer}>
          <Controller
            control={control}
            name="fullName"
            rules={{...inputRules.fullName}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputField
                labelText="Full Name"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          {errors.fullName?.type === 'required' ? (
            <Text style={Styles.errorText}>Enter your full name</Text>
          ) : errors.fullName?.type === 'minLength' ? (
            <Text style={Styles.errorText}>Too short</Text>
          ) : errors.fullName?.type === 'pattern' ? (
            <Text style={Styles.errorText}>
              At least 3 letters each first and last name
            </Text>
          ) : null}
        </View>

        <View style={Styles.inputFieldContainer}>
          <Controller
            control={control}
            name="password"
            rules={{...inputRules.password}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputField
                labelText="Create Password"
                isPassword={true}
                passwordIcon={true}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          {errors?.password?.type === 'required' ? (
            <Text style={Styles.errorText}>Enter your password</Text>
          ) : errors?.password?.type === 'pattern' ? (
            <Text style={Styles.errorText}>Password pattern doesn't match</Text>
          ) : errors?.password?.type === 'minLength' ? (
            <Text style={Styles.errorText}>Too short</Text>
          ) : null}
        </View>

        <View style={Styles.inputFieldContainer}>
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              ...inputRules.confirmPassword,
              validate: value => value === watch('password'),
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputField
                labelText="Confirm Password"
                isPassword={true}
                passwordIcon={true}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          {errors?.confirmPassword?.type === 'required' ? (
            <Text style={Styles.errorText}>Confirm your password</Text>
          ) : errors?.confirmPassword?.type === 'validate' ? (
            <Text style={Styles.errorText}>Passwords does not match</Text>
          ) : null}
        </View>
      </View>

      <View style={Styles.privacyPolicyContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          uncheckedColor={Colors.checkBox}
          color={Colors.textLink}
        />

        <Text style={Styles.policyText}>
          I agree with the
          <Text style={Styles.policyLinkText} onPress={() => {}}>
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text style={Styles.policyLinkText} onPress={() => {}}>
            Privacy Policy.
          </Text>
        </Text>
      </View>

      <View style={Styles.signupButtonContainer}>
        <PrimaryButton
          buttonRadius={10}
          buttonLabel="Sign Up"
          buttonHeight={55}
          onPressHandler={handleSubmit(signupSubmitHandler)}
        />
      </View>

      <View style={Styles.signupFooterContainer}>
        <Text style={Styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={signupSubmitHandler}>
          <Text style={Styles.footerLinkText}>Signin</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
