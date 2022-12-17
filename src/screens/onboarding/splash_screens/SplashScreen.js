import React, {useState, useEffect} from 'react';
import {View, Animated} from 'react-native';
import {Images} from '@app/constants';
import {SplashScreenStyles as Styles} from '@app/assets/styles';

export default function SplashScreen() {
  const [bottomValue, setBottomValue] = useState(new Animated.Value(100));

  const animatedPosition = {
    transform: [{translateY: bottomValue}],
  };

  const moveLogo = () => {
    Animated.timing(bottomValue, {
      toValue: -250,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => navigation.navigate('OnboardingScreen'), 1500);
  };

  useEffect(() => {
    moveLogo();
  }, []);

  return (
    <View style={Styles.mainContainer}>
      <Animated.View style={animatedPosition}>
        <Images.mainLogo style={Styles.mainLogo} />
      </Animated.View>
    </View>
  );
}
