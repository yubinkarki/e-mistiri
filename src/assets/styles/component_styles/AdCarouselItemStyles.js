import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const AdCarouselItemStyles = StyleSheet.create({
  mainContainer: {
    height: hp('23%'),
  },
  gradientContainer: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    position: 'absolute',
    right: wp('1%'),
  },
  leftContainer: {
    width: wp('52%'),
    paddingLeft: wp('8%'),
  },
  title: {
    ...TextStyles.poppinsRegularNormal,
    color: Colors.dashboardAdTitle,
  },
  subtitle: {
    ...TextStyles.poppinsLargeBold,
    color: Colors.white,
    fontSize: 18,
    paddingVertical: hp('1.5%'),
  },
});
