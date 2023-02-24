import {StyleSheet} from 'react-native';
import {BaseToast} from 'react-native-toast-message';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Colors, TextStyles} from '@app/constants';

export default {
  success: props => (
    <BaseToast
      {...props}
      style={Styles.mainContainer}
      contentContainerStyle={Styles.contentContainer}
      text1Style={Styles.title}
      text2Style={Styles.description}
    />
  ),
};

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.successToastBackground,
    borderLeftColor: Colors.successToastLeftBorder,
  },
  contentContainer: {
    paddingHorizontal: wp('4%'),
  },
  title: {
    ...TextStyles.poppinsRegularNormal,
  },
  description: {
    ...TextStyles.poppinsSmallNormal,
    color: Colors.black,
  },
});
