import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const ProfileStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: hp('2%'),
  },
  imageContainer: {
    height: hp('14%'),
    width: wp('30%'),
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    height: hp('17%'),
    width: wp('30%'),
  },
  topContainer: {
    alignItems: 'center',
  },
  fullNameContainer: {
    marginTop: hp('2%'),
  },
  fullName: {
    ...TextStyles.poppinsLargeNormal,
    color: Colors.black,
    textAlign: 'center',
  },
  emailContainer: {
    marginTop: hp('0.5%'),
  },
  email: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.gray,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: hp('3%'),
  },
  botContainer: {
    marginTop: hp('5%'),
    paddingHorizontal: wp('6%'),
  },
});
