import Toast from 'react-native-toast-message';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default ShowToast = data =>
  Toast.show({
    type: data?.type || 'info',
    text1: data?.title || 'Title',
    text2: data?.subtitle || 'Subtitle',
    topOffset: hp(data?.offset || '1%'),
    position: data?.position || 'top',
    onPress: () => Toast.hide(),
  });
