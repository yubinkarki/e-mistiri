import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

import {LaunchCamera, LaunchGallery} from '@app/utils';
import {Colors} from '@app/constants';
import {PrimaryButton} from '@app/commons';

export default function ImagePickerMenu({
  modalState,
  modalChange,
  setProfileImage,
}) {
  const closeModal = () => {
    modalChange(false);
  };

  return (
    <Modal
      isVisible={modalState}
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      animationIn="fadeInLeft"
      animationOut="fadeOutRight"
      animationInTiming={250}
      animationOutTiming={200}
      backdropTransitionInTiming={100}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      deviceHeight={hp('100%')}
      statusBarTranslucent={true}>
      <View style={Styles.cardContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.buttonContainer}>
            <PrimaryButton
              outlined
              buttonHeight={hp('6%')}
              buttonWidth={wp('70%')}
              buttonRadius={10}
              buttonLabel="Take a photo"
              onPressHandler={() => {
                LaunchCamera(setProfileImage);
                closeModal();
              }}>
              Take a photo
            </PrimaryButton>
          </View>

          <View style={Styles.buttonContainer}>
            <PrimaryButton
              outlined
              buttonHeight={hp('6%')}
              buttonWidth={wp('70%')}
              buttonRadius={10}
              buttonLabel="Select from gallery"
              onPressHandler={() => {
                LaunchGallery(setProfileImage);
                closeModal();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const Styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    backgroundColor: Colors.white,
    paddingTop: hp('3%'),
    width: wp('80%'),
    alignSelf: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  buttonContainer: {
    marginBottom: hp('2%'),
  },
});
