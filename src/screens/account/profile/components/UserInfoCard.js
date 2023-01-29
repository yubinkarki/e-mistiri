import {Colors, TextStyles} from '@app/constants';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function UserInfoCard({fullName, phoneNumber, email, address}) {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.textContainer}>
        <Text style={Styles.labelText}>Full Name</Text>
        <Text style={Styles.infoText}>{fullName}</Text>
      </View>

      <View style={Styles.textContainer}>
        <Text style={Styles.labelText}>Phone Number</Text>
        <Text style={Styles.infoText}>{phoneNumber}</Text>
      </View>

      <View style={Styles.textContainer}>
        <Text style={Styles.labelText}>Email Address</Text>
        <Text style={Styles.infoText}>{email}</Text>
      </View>

      <View style={Styles.textContainer}>
        <Text style={Styles.labelText}>Address</Text>
        <Text style={Styles.infoText}>{address}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.productCardBackground,
    shadowColor: Colors.checkBox,
    elevation: 6,
    paddingLeft: 25,
    paddingTop: 25,
    paddingBottom: 10,
  },
  textContainer: {
    marginBottom: hp('2.5%'),
  },
  labelText: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.gray,
    textAlign: 'left',
  },
  infoText: {
    ...TextStyles.poppinsLargeNormal,
    color: Colors.black,
    textAlign: 'left',
    marginTop: 2,
  },
});
