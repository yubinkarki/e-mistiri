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
        {<data.images height="80%" width="80%" />}
      </View>

      <View style={Styles.textContainer}>
        <Text style={Styles.title} numberOfLines={1}>
          {data?.title || "Title"}
        </Text>

        <Text style={Styles.subtitle} numberOfLines={1}>
          {data?.subtitle || "Subtitle"}
        </Text>

        <Text
          style={Styles.price}
          numberOfLines={1}>{`Rs. ${data?.price || 0}`}</Text>
      </View>
    </TouchableOpacity>
  );
}
