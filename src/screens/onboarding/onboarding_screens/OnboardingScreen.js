import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SLI from 'react-native-vector-icons/SimpleLineIcons';
import AD from 'react-native-vector-icons/AntDesign';
import {Colors} from '@app/constants';
import {onboardingData} from './components';
import {OnboardingScreenStyles as Styles} from '@app/assets/styles';

export default function OnboardingScreen({navigation}) {
  const [screenIndex, setScreenIndex] = useState(0);

  const moveToNextScreen = () => {
    screenIndex < onboardingData.length - 1
      ? setScreenIndex(screenIndex + 1)
      : navigation.navigate('LoginStack');
  };

  const moveToPreviousScreen = () => {
    setScreenIndex(screenIndex - 1);
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topContainer}>
        <View style={Styles.buttonContainer}>
          <View>
            {screenIndex > 0 ? (
              <View opacity={0.7}>
                <TouchableOpacity onPress={moveToPreviousScreen}>
                  <SLI
                    name="arrow-left-circle"
                    color={Colors.white}
                    size={45}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity disabled>
                <SLI
                  name="arrow-left-circle"
                  color={Colors.splashScreenBG}
                  size={45}
                />
              </TouchableOpacity>
            )}
          </View>

          {screenIndex !== onboardingData.length - 1 ? (
            <View opacity={0.7}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginStack')}>
                <Text style={Styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <View style={Styles.mainImageContainer}>
          {onboardingData[screenIndex].image}
        </View>
      </View>

      <View style={Styles.bottomContainer}>
        <Text style={Styles.titleText}>
          {onboardingData[screenIndex].title}
        </Text>

        <Text style={Styles.descriptionText}>
          {onboardingData[screenIndex].description}
        </Text>

        <TouchableOpacity
          style={Styles.nextButtonContainer}
          activeOpacity={0.8}
          onPress={moveToNextScreen}>
          <LinearGradient
            style={Styles.nextButton}
            useAngle
            colors={[
              Colors.onboardingNextButtonTopGradient,
              Colors.onboardingNextButtonBotGradient,
            ]}
            locations={[0.48, 2.2]}>
            <AD name="right" size={25} color={Colors.white} />
          </LinearGradient>
        </TouchableOpacity>

        <Text style={Styles.pageText}>
          {screenIndex + 1}/{onboardingData.length}
        </Text>
      </View>
    </View>
  );
}
