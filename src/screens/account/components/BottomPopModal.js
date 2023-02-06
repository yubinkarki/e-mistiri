import React from 'react';
import {Modal, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors} from '@app/constants';

export default function BottomPopModal({
  isModalVisible,
  toggleModal,
  closeModal,
  children,
}) {
  return (
    <Modal
      animationType="fade"
      visible={isModalVisible}
      transparent={true}
      statusBarTranslucent={true}
      onRequestClose={toggleModal}>
      <TouchableOpacity
        activeOpacity={1}
        style={Styles.backdropContainer}
        onPress={closeModal}>
        {children}
      </TouchableOpacity>
    </Modal>
  );
}

const Styles = StyleSheet.create({
  backdropContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.modalBackdrop,
  },
});
