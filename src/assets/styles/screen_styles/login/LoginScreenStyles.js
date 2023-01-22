import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const LoginScreenStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
  topContainer: {
    alignItems: 'center',
  },
  mainLogoContainer: {
    paddingTop: hp('7%'),
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
  loginButtonContainer: {
    marginTop: hp('4%'),
  },
  inputFieldContainer: {
    height: hp('9%'),
  },
  footerContainer: {
    flexDirection: 'row',
    // height: hp('25%'),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: hp('5%'),
    paddingBottom: hp('2%'),
  },
  footerText: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.footerText,
  },
  footerLinkText: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.textLink,
  },
  forgotPasswordLink: {
    ...TextStyles.poppinsLargeLight,
    color: Colors.textLink,
    alignSelf: 'center',
    paddingTop: hp('4%'),
  },
});
