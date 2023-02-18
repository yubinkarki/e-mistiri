import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ProductCardStyles as Styles} from '@app/assets/styles';

export default function ProductCard({data, onPress}) {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      activeOpacity={0.84}
      onPress={onPress}>
      <View style={Styles.imageContainer}>
        {<data.image height="80%" width="80%" />}
      </View>

      <View style={Styles.textContainer}>
        <Text style={Styles.title}>{data.title}</Text>

        <Text style={Styles.subtitle}>{data.subtitle}</Text>

        <Text style={Styles.price}>{`Rs. ${data.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
}
