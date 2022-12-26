import React, {useState, useEffect} from 'react';
import {View, Animated, StatusBar} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors, Images} from '@app/constants';
import {SplashScreenStyles as Styles} from '@app/assets/styles';

export default function SplashScreen({navigation}) {
  const [bottomValue, setBottomValue] = useState(new Animated.Value(hp('20%')));

  const animatedPosition = {
    transform: [{translateY: bottomValue}],
  };

  const moveLogo = () => {
    Animated.timing(bottomValue, {
      toValue: -hp('45%'),
      duration: 1200,
      useNativeDriver: true,
    }).start();

    setTimeout(() => navigation.navigate('OnboardingScreen'), 1800);
  };

  useEffect(() => {
    moveLogo();
  }, []);

  return (
    <View style={Styles.mainContainer}>
      <StatusBar backgroundColor={Colors.splashScreenBG} />
      <Animated.View style={animatedPosition}>
        <Images.mainLogo style={Styles.mainLogo} />
      </Animated.View>
    </View>
  );
}
