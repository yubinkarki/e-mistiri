import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles, Images} from '@app/constants';
import PromotionButton from './PromotionButton';

export default function PromotionCard() {
  return (
    <View style={Styles.mainContainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0074DD', '#A3CEF5']}
        style={Styles.gradientContainer}>
        <View style={Styles.adTextOneContainer}>
          <Text style={Styles.adTextOne}>UPTO</Text>
        </View>

        <View style={Styles.adTextTwoContainer}>
          <Text style={Styles.adTextTwo}>Rs. 300 OFF</Text>
        </View>

        <View style={Styles.adTextThreeContainer}>
          <Text style={Styles.adTextThree}>PER PANEL</Text>
        </View>

        <View style={Styles.adTextFourContainer}>
          <Text style={Styles.adTextFour}>2 years warranty on paint</Text>
        </View>
      </LinearGradient>

      <Images.promotionCar style={Styles.promotionImage} />

      <View style={Styles.bottomContainer}>
        <PromotionButton />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.promotionCardBackground,
    height: hp('22%'),
    borderRadius: 6,
  },
  topContainer: {
    height: 121,
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 26,
  },
  gradientContainer: {
    height: 121,
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 26,
    position: 'relative',
    paddingTop: 15,
    paddingLeft: 20,
  },
  adTextOne: {
    ...TextStyles.poppinsSmallNormal,
    color: Colors.promotionCardText,
  },
  adTextOneContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  adTextTwo: {
    ...TextStyles.poppinsExtraLargeBold,
    color: Colors.white,
    fontWeight: '700',
    fontSize: 28,
  },
  adTextTwoContainer: {
    position: 'absolute',
    top: 24,
    left: 20,
  },
  adTextThree: {
    ...TextStyles.poppinsSmallBold,
    color: Colors.white,
    fontWeight: '700',
  },
  adTextThreeContainer: {
    position: 'absolute',
    top: 62,
    left: 20,
  },
  adTextFour: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.white,
  },
  adTextFourContainer: {
    position: 'absolute',
    top: 90,
    left: 20,
  },
  bottomContainer: {
    paddingTop: hp('1.3%'),
    paddingLeft: wp('4%'),
  },
  promotionImage: {
    position: 'absolute',
    bottom: 20,
    right: 0,
  },
});
