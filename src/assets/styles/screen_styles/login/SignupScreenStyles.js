import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const SignupScreenStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.loginBackground,
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
  topContainer: {
    alignItems: 'center',
  },
  mainLogoContainer: {
    paddingTop: hp('10%'),
    paddingBottom: hp('4%'),
  },
  titleText: {
    ...TextStyles.lexendLargeBold,
    color: Colors.black,
    textAlign: 'center',
  },
  subtitleText: {
    ...TextStyles.poppinsLargeLight,
    color: Colors.subtitleText,
    textAlign: 'center',
    paddingTop: hp('1%'),
  },
});
