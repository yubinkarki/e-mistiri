import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PrimaryButton} from '@app/commons';
import {Colors, TextStyles} from '@app/constants';

export default function LogoutCard({closeModalHandler, logoutHandler}) {
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.logoutText}>Logout</Text>

      <Text style={Styles.confirmText}>Are you sure you want to logout?</Text>

      <View style={Styles.buttonContainer}>
        <PrimaryButton
          buttonHeight={44}
          buttonWidth="48%"
          buttonLabel="No"
          buttonRadius={5}
          outlined
          onPressHandler={closeModalHandler}
        />

        <PrimaryButton
          buttonHeight={44}
          buttonWidth="48%"
          buttonLabel="Yes"
          buttonRadius={5}
          onPressHandler={logoutHandler}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height: hp('18%'),
    width: wp('100%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 20,
    elevation: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  logoutText: {
    ...TextStyles.poppinsLargeNormal,
    color: Colors.black,
  },
  confirmText: {
    ...TextStyles.poppinsLargeLight,
    color: Colors.gray,
  },
});
