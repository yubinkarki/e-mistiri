import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles, Images} from '@app/constants';

export default function RewardPointCard() {
  return (
    <View style={Styles.mainContainer}>
      <View>
        <Images.rewardPointRibbon />
      </View>
      <View>
        <Text style={Styles.pointText}>80.06</Text>
        <Text style={Styles.rewardText}>Reward Points</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    height: hp('8%'),
    width: wp('42%'),
    backgroundColor: Colors.white,
    borderRadius: 12,
    elevation: 10,
    shadowColor: Colors.checkBox,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: hp('4%'),
  },
  pointText: {
    ...TextStyles.poppinsExtraLargeNormal,
    color: Colors.black,
  },
  rewardText: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.gray,
  },
});
