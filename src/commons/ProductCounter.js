import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles, Images} from '@app/constants';

export default function ProductCounter({value}) {
  const [count, setCount] = useState(value || 81);

  const counterIncrement = () => {
    count < 100 && setCount(count + 1);
  };

  const counterDecrement = () => {
    count > 1 && setCount(count - 1);
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
