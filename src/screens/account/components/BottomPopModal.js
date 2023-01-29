import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function BottomPopModal({
  isModalVisible,
  toggleModal,
  closeModal,
  children,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
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
  },
});
