import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {EditProfileStyles as Styles} from '@app/assets/styles';
import {Colors, Images} from '@app/constants';
import {InputField, PrimaryButton} from '@app/commons';

export default function EditProfile() {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const [profileImage, setProfileImage] = useState({});

  const {userInfo} = useSelector(state => state?.user || {});

  useEffect(() => {
    // Populate data on input fields.
    reset({
      fullName: userInfo?.fullName || 'Chris Brown',
      phone: userInfo?.phoneNumber?.toString() || '9808382848',
      address: userInfo?.address || 'Hollywood, USA',
      email: userInfo?.email || 'chris@brown.com',
    });
  }, [userInfo]);

  const changeImageHandler = () => {};

  const updateProfileHandler = () => {};

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={Styles.mainContainer}>
      <View style={Styles.imageContainer}>
        <Image
          style={Styles.image}
          source={
            Array.isArray(profileImage?.assets)
              ? {
                  uri: profileImage?.assets[0]?.uri,
                }
              : Images.defaultProfile
          }
        />
      </View>

      <View style={Styles.changePhotoContainer}>
        <Feather name="edit-2" size={15} color={Colors.gray} />

        <TouchableOpacity onPress={changeImageHandler} activeOpacity={0.5}>
          <Text style={Styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.inputContainer}>
        <View>
          <Text style={Styles.inputLabel}>Full Name</Text>

          <InputField
            control={control}
            errors={errors}
            inputName="fullName"
            outlineColor={Colors.inputFieldOutline}
          />
        </View>

        <View>
          <Text style={Styles.inputLabel}>Phone Number</Text>

          <InputField
            control={control}
            errors={errors}
            inputName="phone"
            outlineColor={Colors.inputFieldOutline}
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text style={Styles.inputLabel}>Address</Text>

          <InputField
            control={control}
            errors={errors}
            inputName="address"
            outlineColor={Colors.inputFieldOutline}
          />
        </View>

        <View>
          <Text style={Styles.inputLabel}>Email</Text>

          <InputField
            control={control}
            errors={errors}
            inputName="email"
            outlineColor={Colors.inputFieldOutline}
            disabled
          />
        </View>

        <View style={Styles.updateButtonContainer}>
          <PrimaryButton
            buttonLabel="Update Profile"
            buttonHeight={50}
            buttonWidth={wp('50%')}
            buttonRadius={10}
            onPressHandler={handleSubmit(updateProfileHandler)}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
