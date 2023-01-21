import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SLI from 'react-native-vector-icons/SimpleLineIcons';
import AD from 'react-native-vector-icons/AntDesign';
import {Colors} from '@app/constants';
import {onboardingData} from './components';
import {OnboardingScreenStyles as Styles} from '@app/assets/styles';

export default function OnboardingScreenThree({navigation}) {
  return (
    <View style={Styles.mainContainer}>
      <StatusBar backgroundColor={Colors.splashScreenBG} />

      <View style={Styles.topContainer}>
        <View style={Styles.buttonContainer}>
          <View>
            <View opacity={0.7}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <SLI name="arrow-left-circle" color={Colors.white} size={45} />
              </TouchableOpacity>
            </View>
          </View>

          <View opacity={0.7}>
            <TouchableOpacity disabled>
              <Text
                style={{
                  ...Styles.skipButtonText,
                  color: Colors.splashScreenBG,
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.mainImageContainer}>{onboardingData[2].image}</View>
      </View>

      <View style={Styles.bottomContainer}>
        <Text style={Styles.titleText}>{onboardingData[2].title}</Text>

        <Text style={Styles.descriptionText}>
          {onboardingData[2].description}
        </Text>

        <TouchableOpacity
          style={Styles.nextButtonContainer}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('LoginStack')}>
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

        <Text style={Styles.pageText}>3/3</Text>
      </View>
    </View>
  );
}
