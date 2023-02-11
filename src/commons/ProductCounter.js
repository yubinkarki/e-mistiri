import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles, Images} from '@app/constants';

export default function ProductCounter({
  value,
  counterPlusHandler,
  counterMinusHandler,
}) {
  const [count, setCount] = useState(value || 0);

  const counterIncrement = () => {
    if (count < 10) {
      counterPlusHandler();
      setCount(count + 1);
    } else {
      Alert.alert(
        'Limit Reached',
        'You can only add 10 of each item',
        [{text: 'Got It'}],
        {
          cancelable: true,
        },
      );
    }
  };

  const counterDecrement = () => {
    if (count > 1) {
      counterMinusHandler();
      setCount(count - 1);
    }
  };

  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={counterDecrement}>
        <Images.counterMinus width={24} />
      </TouchableOpacity>

      <Text style={Styles.text}>{count}</Text>

      <TouchableOpacity activeOpacity={0.5} onPress={counterIncrement}>
        <Images.counterPlus width={24} />
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: hp('4.1%'),
    width: wp('22%'),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('1.1%'),
    backgroundColor: Colors.dashboardProductCategory,
  },
  text: {
    ...TextStyles.poppinsRegularNormal,
    color: Colors.textLink,
  },
});
