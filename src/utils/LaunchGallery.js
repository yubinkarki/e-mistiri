import {launchImageLibrary} from 'react-native-image-picker';

export default LaunchGallery = async setProfileImage => {
  const options = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 500,
    quality: 1,
    selectionLimit: 1,
  };

  await launchImageLibrary(options, response => {
    if (response.errorCode == 'camera_unavailable') {
      alert('Camera not available on device');
      return;
    } else if (response.errorCode == 'permission') {
      alert('Permission not satisfied');
      return;
    } else if (response.errorCode == 'others') {
      alert(response.errorMessage);
      return;
    } else {
      setProfileImage(response);
    }
  });
};
