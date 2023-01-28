import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const VehicleCategoryCardStyles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: Colors.dashboardProductCategory,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.dashboardProductCategory,
  },
  activeImageContainer: {
    backgroundColor: Colors.dashboardProductActiveCategory,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.textLink,
  },
  titleContainer: {
    paddingTop: 4,
  },
  title: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.black,
    textAlign: 'center',
  },
  activeTitle: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.textLink,
    textAlign: 'center',
  },
});
