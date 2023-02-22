import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const ProductCardStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.productCardBackground,
    borderRadius: 18,
    height: hp('27%'),
    width: wp('40%'),
    elevation: 8,
    shadowColor: Colors.checkBox,
    marginBottom: hp('4%'),
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('18%'),
  },
  textContainer: {
    paddingLeft: wp('4%'),
    width: wp("38%")
  },
  title: {
    ...TextStyles.poppinsRegularNormal,
    color: Colors.black,
  },
  subtitle: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.productCardSubtitle,
  },
  price: {
    ...TextStyles.poppinsRegularLight,
    color: Colors.productCardPrice,
  },
});
