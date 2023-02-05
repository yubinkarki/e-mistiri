import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Spinner from 'react-native-loading-spinner-overlay';

import {InputRules} from '@app/screens/login';
import {Colors, Images} from '@app/constants';
import {InputField, PrimaryButton} from '@app/commons';
import {updateUserInfo} from '@app/redux/slices';
import {CapitalizeFirstLetter, ShowToast, WaitTimeout} from '@app/utils';
import {ImagePickerMenu} from './components';
import {EditProfileStyles as Styles} from '@app/assets/styles';

export default function EditProfile({navigation}) {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const dispatch = useDispatch();

  const [profileImage, setProfileImage] = useState({});
  const [fetching, setFetching] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);

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

  const changeImageHandler = () => {
    setShowImagePicker(!showImagePicker);
  };

  const updateAction = userData => {
    setFetching(true);

    WaitTimeout(1000).then(() => {
      dispatch(
        updateUserInfo({
          ...userData,
          profileImage: Array.isArray(profileImage?.assets)
            ? profileImage?.assets[0]?.uri
            : null,
        }),
      );

      setFetching(false);

      navigation.goBack();

      ShowToast({
        type: 'success',
        title: 'Update success',
        subtitle: 'Information updated successfully',
        position: 'bottom',
      });
    });
  };

  const updateProfileHandler = data => {
    const userData = {
      fullName: CapitalizeFirstLetter(data.fullName.toLowerCase()),
      phone: data.phone.trim(),
    };

    updateAction(userData);
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={Styles.mainContainer}>
      <Spinner
        visible={fetching}
        color={Colors.white}
        overlayColor={Colors.overlaySpinnerBackground}
        animation="fade"
      />

      <ImagePickerMenu
        modalState={showImagePicker}
        modalChange={setShowImagePicker}
        setProfileImage={setProfileImage}
      />

      <View style={Styles.imageContainer}>
        <Image
          style={Styles.image}
          source={
            Array.isArray(profileImage?.assets)
              ? {
                  uri: profileImage?.assets[0]?.uri,
                }
              : userInfo?.profileImage
              ? {
                  uri: userInfo?.profileImage,
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
            rules={InputRules.editProfileFullName}
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
            rules={InputRules.editProfilePhone}
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
