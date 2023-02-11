import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AdCarouselButton from './AdCarouselButton';
import {AdCarouselItemStyles as Styles} from '@app/assets/styles';

export default function AdCarouselItem({title, subtitle, image}) {
  return (
    <View style={Styles.mainContainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#000000', '#43573D', '#E7DDDC']}
        locations={[0.5, 0.7, 0.9]}
        style={Styles.gradientContainer}>
        <View style={Styles.leftContainer}>
          <Text style={Styles.title}>{title}</Text>

          <Text style={Styles.subtitle} numberOfLines={2} ellipsizeMode="tail">
            {subtitle}
          </Text>

          <AdCarouselButton label="Buy Now" onPress={() => {}} />
        </View>

        <View style={Styles.rightContainer}>{image}</View>
      </LinearGradient>
    </View>
  );
}
