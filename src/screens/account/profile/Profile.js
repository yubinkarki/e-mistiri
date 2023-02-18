import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

import {PrimaryButton} from '@app/commons';
import {Images} from '@app/constants';
import {UserInfoCard} from './components';
import {ProfileStyles as Styles} from '@app/assets/styles';

export default function Profile({navigation}) {
  const {userInfo} = useSelector(state => state?.user || {});

  const editProfileHandler = () => {
    Toast.hide();
    navigation.navigate('EditProfile');
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topContainer}>
        <View style={Styles.imageContainer}>
          <Image
            source={
              userInfo?.profileImage
                ? {
                    uri: userInfo?.profileImage,
                  }
                : Images.defaultProfile
            }
            style={Styles.image}
          />
        </View>

        <View style={Styles.fullNameContainer}>
          <Text style={Styles.fullName}>
            {userInfo?.fullName || 'Chris Brown'}
          </Text>
        </View>

        <View style={Styles.emailContainer}>
          <Text style={Styles.email}>
            {userInfo?.email || 'chris@brown.com'}
          </Text>
        </View>

        <View style={Styles.buttonContainer}>
          <PrimaryButton
            buttonLabel="Edit Profile"
            buttonHeight={50}
            buttonWidth={170}
            buttonRadius={10}
            onPressHandler={editProfileHandler}
          />
        </View>
      </View>

      <View style={Styles.botContainer}>
        <UserInfoCard
          fullName={userInfo?.fullName || 'Chris Brown'}
          phoneNumber={userInfo?.phone || 9808382848}
          email={userInfo?.email || 'chris@brown.com'}
          address={userInfo?.address || 'Hollywood, USA'}
        />
      </View>
    </View>
  );
}
