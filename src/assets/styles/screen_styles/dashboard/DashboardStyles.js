import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '@app/constants';

export const DashboardStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    marginVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    justifyContent: 'space-between',
  },
  carouselContainer: {
    marginTop: hp('1.5%'),
  },
  vehicleCategoryContainer: {
    alignItems: 'center',
  },
  segmentedButtonContainer: {
    marginTop: hp('4%'),
    paddingHorizontal: wp('4%'),
  },
  productListContainer: {
    marginTop: hp('3.2%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
