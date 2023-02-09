import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useForm} from 'react-hook-form';

import {Colors} from '@app/constants';
import {InputRules} from '@app/screens/login';
import {InputField, PrimaryButton} from '@app/commons';

export default function ChangePassword() {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const submitButtonHandler = () => {};

  return (
    <ScrollView
      style={Styles.mainContainer}
      keyboardShouldPersistTaps="handled">
      <View style={Styles.inputContainer}>
        <View style={Styles.topContainer}>
          <Text style={Styles.inputLabel}>Current Password</Text>

          <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
            <Text style={Styles.linkText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <InputField
          control={control}
          errors={errors}
          isPassword
          passwordIcon
          inputName="currentPassword"
          rules={InputRules.password}
          outlineColor={Colors.inputFieldOutline}
        />
      </View>

      <View style={Styles.inputContainer}>
        <Text style={Styles.inputLabel}>New Password</Text>

        <InputField
          control={control}
          errors={errors}
          isPassword
          passwordIcon
          inputName="newPassword"
          rules={InputRules.password}
          outlineColor={Colors.inputFieldOutline}
        />
      </View>

      <View style={Styles.inputContainer}>
        <Text style={Styles.inputLabel}>Confirm Password</Text>

        <InputField
          control={control}
          isPassword
          passwordIcon
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
          outlineColor={Colors.inputFieldOutline}
        />
      </View>

      <View style={Styles.buttonContainer}>
        <PrimaryButton
          buttonLabel="Save Changes"
          buttonRadius={10}
          buttonHeight={55}
          buttonWidth={wp('60%')}
          onPressHandler={handleSubmit(submitButtonHandler)}
        />
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    paddingTop: hp('4%'),
    backgroundColor: Colors.white,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    height: hp('13%'),
  },
  inputLabel: {
    color: Colors.editProfileInputLabel,
    fontFamily: 'Poppins',
    fontSize: 16,
    marginBottom: 3,
  },
  linkText: {
    color: Colors.linkText,
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: hp('10%'),
    marginBottom: hp('12%'),
    alignItems: 'center',
  },
});
