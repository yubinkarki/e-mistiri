import {PermissionsAndroid} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

const launchDeviceCamera = async setProfileImage => {
  let options = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 500,
    quality: 1,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  await launchCamera(options, response => {
    if (response.error) {
      alert('Error launching camera: ', response.error);
    } else if (response.customButton) {
      alert('User tapped custom button: ', response.customButton);
    } else {
      setProfileImage(response);
    }
  });
};

export default RequestCameraPermission = async setProfileImage => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      launchDeviceCamera(setProfileImage);
    } else {
      alert('Camera permission denied');
    }
  } catch (err) {
    alert(err);
  }
};
