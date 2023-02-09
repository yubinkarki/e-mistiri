import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const CartItemStyles = StyleSheet.create({
  mainContainer: {
    height: hp('13%'),
    flexDirection: 'row',
    backgroundColor: Colors.productCardBackground,
    borderRadius: 22,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: Colors.editProfileInputLabel,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    height: hp('10.7%'),
    width: wp('22.7%'),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: Colors.dashboardProductCategory,
  },
  textContainer: {
    paddingLeft: wp('2.5%'),
    width: wp('50%'),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.5%'),
  },
  title: {
    ...TextStyles.poppinsExtraLargeNormal,
    color: Colors.black,
    fontSize: 20,
  },
  subtitle: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.productCardSubtitle,
    fontSize: 14,
    marginTop: hp('0.2%'),
  },
  price: {
    ...TextStyles.poppinsExtraLargeNormal,
    color: Colors.black,
    fontSize: 17,
  },
  discountedPrice: {
    ...TextStyles.poppinsExtraLargeNormal,
    color: Colors.productCardSubtitle,
    fontSize: 14,
    textDecorationLine: 'line-through',
    marginLeft: wp('1.5%'),
  },
  crossContainer: {
    position: 'absolute',
    right: 0,
    bottom: hp('2.5%'),
  },
  counterContainer: {
    position: 'absolute',
    right: 0,
    top: hp('1.2%'),
  },
});
