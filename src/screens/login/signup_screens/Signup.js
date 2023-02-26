import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {Checkbox} from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';

import {InputRules} from '../components';
import {Colors, Images} from '@app/constants';
import {ShowToast, WaitTimeout, CapitalizeFirstLetter} from '@app/utils';
import {updateIsSignedIn, updateUserInfo} from '@app/redux/slices';
import {InputField, PrimaryButton} from '@app/commons';
import {SignupScreenStyles as Styles} from '@app/assets/styles';

export default function Signup({navigation}) {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [fetching, setFetching] = useState(false);

  const signupAction = userData => {
    setFetching(true);

    WaitTimeout(1000).then(() => {
      setFetching(false);

      // Will navigate to MainStack when value is changed.
      dispatch(updateIsSignedIn(true));

      dispatch(updateUserInfo(userData));

      ShowToast({
        type: 'success',
        title: 'Account created successfully',
        subtitle: 'Have fun using E-Mistiri',
      });
    });
  };

  const signupSubmitHandler = signupData => {
    const userData = {
      email: signupData.email.trim().toLowerCase(),
      fullName: CapitalizeFirstLetter(signupData.fullName.toLowerCase()),
      password: signupData.password,
    };

    !checked
      ? Alert.alert(
          'Terms of Service',
          'Please review and accept the Terms of Service and Privacy Policy to continue.',
        )
      : signupAction(userData);
  };

  return (
    <ScrollView
      style={Styles.mainContainer}
      keyboardShouldPersistTaps="handled">
      <StatusBar backgroundColor={Colors.white} />

      <Spinner
        visible={fetching}
        color={Colors.white}
        overlayColor={Colors.overlaySpinnerBackground}
        animation="fade"
      />

      <View style={Styles.topContainer}>
        <View style={Styles.mainLogoContainer}>
          <Images.mainLogoColor />
        </View>

        <Text style={Styles.titleText}>Create a New Account</Text>

        <Text style={Styles.subtitleText}>
          Create an account and get started with a new experience of shopping
        </Text>
      </View>

      <View style={Styles.formContainer}>
        <View style={Styles.inputFieldContainer}>
          <InputField
            control={control}
            errors={errors}
            inputName="email"
            rules={InputRules.email}
            labelText="Email Address"
            isPassword={false}
          />
        </View>

        <View style={Styles.inputFieldContainer}>
          <InputField
            control={control}
            errors={errors}
            inputName="fullName"
            rules={InputRules.fullName}
            labelText="Full Name"
            isPassword={false}
          />
        </View>

        <View style={Styles.inputFieldContainer}>
          <InputField
            control={control}
            errors={errors}
            inputName="password"
            rules={InputRules.password}
            labelText="Password"
            isPassword={true}
            passwordIcon={true}
          />
        </View>

        <View style={Styles.inputFieldContainer}>
          <InputField
            control={control}
            errors={errors}
            inputName="confirmPassword"
            rules={{
              ...InputRules.confirmPassword,
              validate: value => {
                if (value !== watch('password')) {
                  return 'Password does not match';
                }
              },
            }}
            labelText="Confirm Password"
            isPassword={true}
            passwordIcon={true}
          />
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
        <TouchableOpacity
          onPress={() => {
            Toast.hide();
            navigation.navigate('Login');
          }}>
          <Text style={Styles.footerLinkText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
