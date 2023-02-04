import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const EditProfileStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
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
    alignSelf: 'center',
    marginVertical: hp('2%'),
  },
  image: {
    height: hp('17%'),
    width: wp('30%'),
  },
  changePhotoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changePhotoText: {
    ...TextStyles.poppinsLargeNormal,
    color: Colors.gray,
    paddingLeft: wp('2%'),
  },
  inputContainer: {
    paddingHorizontal: wp('6%'),
  },
  inputLabel: {
    ...TextStyles.poppinsLargeNormal,
    color: Colors.editProfileInputLabel,
    paddingTop: hp('1.5%'),
  },
  updateButtonContainer: {
    alignItems: 'center',
    paddingVertical: hp('8%'),
  },
});
