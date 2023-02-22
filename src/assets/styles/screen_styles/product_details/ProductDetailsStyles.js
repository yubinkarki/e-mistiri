import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles} from '@app/constants';

export const ProductDetailsStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.productDetailsBG,
  },
  topContainer: {
    height: hp('38%'),
    paddingTop: hp('1%'),
  },
  carouselContainer: {
    height: hp('28%'),
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  infoContainer: {
    height: hp('28%'),
    paddingHorizontal: wp('5%'),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp('3%'),
  },
  titleLeftContainer: {
    width: wp('60%'),
  },
  titleRightContainer: {
    alignItems: 'flex-end',
    width: wp('30%'),
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: wp('24%'),
  },
  starIcon: {
    paddingRight: wp('1.5%'),
  },
  subtitle: {
    ...TextStyles.poppinsLargeLight,
    color: Colors.productCardSubtitle,
  },
  title: {
    ...TextStyles.poppinsExtraLargeBold,
    color: Colors.black,
    fontSize: 20,
    paddingTop: hp('0.5%'),
  },
  descriptionContainer: {
    paddingTop: hp('2%'),
    height: hp("7%")
  },
  buttonsContainer: {
    paddingTop: hp('3.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsRightContainer: {
    width: wp('55%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
    borderWidth: hp('0.2%'),
    borderColor: Colors.productDetailsBG,
  },
  moreProductsContainer: {
    flex: 1,
    paddingTop: hp('1.6%'),
  },
  moreProductsTitle: {
    ...TextStyles.poppinsLargeLight,
    color: Colors.black,
    paddingLeft: wp('5%'),
  },
  similarProductsContainer: {
    paddingTop: hp('1.8%'),
  },
  listContainer: {
    paddingLeft: wp('6%'),
    paddingRight: wp('18%'),
  },
});
