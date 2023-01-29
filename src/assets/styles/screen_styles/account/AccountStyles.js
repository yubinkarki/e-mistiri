import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const AccountStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  topContainer: {
    height: hp('34%'),
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    paddingTop: hp('3%'),
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
  nameContainer: {
    marginTop: hp('2%'),
  },
  emailContainer: {
    marginTop: hp('1%'),
  },
  email: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.gray,
  },
  name: {
    ...TextStyles.poppinsExtraLargeBold,
    color: Colors.black,
  },
  scrollContainer: {
    flex: 1, // Remove this to enable scroll.
    justifyContent: 'space-between',
    marginTop: hp('4%'),
    paddingTop: hp('2%'),
    paddingHorizontal: wp('4%'),
  },
  horizontalLine: {
    width: wp('90%'),
    marginBottom: hp('2.5%'),
    borderBottomColor: Colors.productCardSubtitle,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logoutCardContainer: {
    paddingBottom: hp('6.5%'),
  },
});
