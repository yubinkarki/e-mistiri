import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const SettingsStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
  listContainer: {
    paddingVertical: hp('3%'),
  },
  listSeparator: {
    height: hp('1.5%'),
  },
});
