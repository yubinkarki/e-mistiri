import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {VehicleCategoryCardStyles as Styles} from '@app/assets/styles';

export default function VehicleCategoryCard({title, image, isActive, onPress}) {
  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        style={isActive ? Styles.activeImageContainer : Styles.imageContainer}
        onPress={onPress}
        activeOpacity={0.7}>
        {image}
      </TouchableOpacity>

      <View style={Styles.titleContainer}>
        <Text style={isActive ? Styles.activeTitle : Styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
}
