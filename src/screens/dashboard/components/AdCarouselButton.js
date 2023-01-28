import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export default function AdCarouselButton({label, onPress}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#E7973C', '#00117A']}
      style={Styles.gradientContainer}>
      <View>
        <Button
          uppercase={false}
          labelStyle={Styles.label}
          contentStyle={Styles.content}
          onPress={onPress}
          style={Styles.button}>
          {label}
        </Button>
      </View>
    </LinearGradient>
  );
}

const Styles = StyleSheet.create({
  gradientContainer: {
    width: wp('30%'),
    height: hp('6%'),
    borderRadius: 10,
  },
  button: {
    width: 'auto',
    borderRadius: 0,
  },
  label: {
    ...TextStyles.poppinsLargeNormal,
    color: Colors.white,
  },
  content: {
    height: '100%',
  },
});
