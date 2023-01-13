import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const SignupScreenStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
  topContainer: {
    alignItems: 'center',
  },
  mainLogoContainer: {
    paddingTop: hp('8%'),
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
  formContainer: {
    marginTop: hp('5%'),
  },
  signupButtonContainer: {
    marginTop: hp('4%'),
  },
  inputFieldContainer: {
    height: hp('9%'),
  },
  errorText: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.errorText,
    paddingLeft: wp('4.4%'),
    paddingTop: hp('0.2%'),
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    marginTop: hp('2%'),
  },
  policyText: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.subtitleText,
    paddingRight: wp('15%'),
  },
  policyLinkText: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.textLink,
  },
  signupFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: hp('6%'),
  },
  footerText: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.footerText,
  },
  footerLinkText: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.textLink,
  },
});
