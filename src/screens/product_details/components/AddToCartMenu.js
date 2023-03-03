import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import SLI from 'react-native-vector-icons/SimpleLineIcons'

import {Colors, TextStyles} from '@app/constants';
import {PrimaryButton} from '@app/commons';

export default function AddToCartMenu({modalState, modalChange, navigation}) {
  const closeModal = () => {
    modalChange(false);
  };

  const buttonPressHandler = selection => {
    switch (selection) {
      case 'dashboard':
        navigation.navigate('Dashboard');
        break;

      case 'cart':
        navigation.navigate('ShoppingCart');
        break;

      default:
        setShowAddToCartMenu(false);
        break;
    }
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
          <View style={Styles.titleContainer}>
            <SLI name="check" color={Colors.successText} size={30}/>

            <Text style={Styles.title}>Success!</Text>
          </View>

          <View style={Styles.buttonContainer}>
            <PrimaryButton
              outlined
              buttonHeight={hp('6%')}
              buttonWidth={wp('70%')}
              buttonRadius={10}
              buttonLabel="Go to Dashboard"
              onPressHandler={() => buttonPressHandler('dashboard')}
            />
          </View>

          <View style={Styles.buttonContainer}>
            <PrimaryButton
              outlined
              buttonHeight={hp('6%')}
              buttonWidth={wp('70%')}
              buttonRadius={10}
              buttonLabel="Go to Cart"
              onPressHandler={() => buttonPressHandler('cart')}
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
  titleContainer:{
    flexDirection: "row",
    width: wp("60%"),
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: hp('4%'),
  },
  title: {
    ...TextStyles.poppinsExtraLargerNormal,
    color: Colors.successText,
    paddingLeft: wp("2%")
  },
});
