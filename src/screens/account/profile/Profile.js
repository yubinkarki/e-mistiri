import React from 'react';
import {View, Text, Image} from 'react-native';
import {PrimaryButton} from '@app/commons';
import {Images} from '@app/constants';
import {UserInfoCard} from './components';
import {ProfileStyles as Styles} from '@app/assets/styles';

export default function Profile() {
  const editProfileHandler = () => {};

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topContainer}>
        <View style={Styles.imageContainer}>
          <Image source={Images.defaultProfile} style={Styles.image} />
        </View>

        <View style={Styles.fullNameContainer}>
          <Text style={Styles.fullName}>Chris Brown</Text>
        </View>

        <View style={Styles.emailContainer}>
          <Text style={Styles.email}>chris@brown.com</Text>
        </View>

        <View style={Styles.buttonContainer}>
          <PrimaryButton
            buttonLabel="Edit Profile"
            buttonHeight={50}
            buttonWidth={180}
            buttonRadius={110}
            onPressHandler={editProfileHandler}
          />
        </View>
      </View>

      <View style={Styles.botContainer}>
        <UserInfoCard
          fullName="Chris Brown"
          phoneNumber={9808382848}
          email="chris@brown.com"
          address="Hollywood, USA"
        />
      </View>
    </View>
  );
}
