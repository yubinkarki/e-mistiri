import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors, TextStyles} from '@app/constants';

export default function BillCard({count, totalAmount}) {
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.heading}>Bill Details</Text>

      <View style={Styles.bottomContainer}>
        <View>
          <Text style={Styles.countLabel}>Item Total</Text>
          <Text style={Styles.totalLabel}>Total Price</Text>
        </View>

        <View>
          <Text style={Styles.count}>{`${count || 0}`}</Text>
          <Text style={Styles.totalAmount}>{`Rs. ${totalAmount || 0}`}</Text>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.dashboardProductCategory,
    height: hp('12%'),
    borderRadius: 16,
    shadowColor: Colors.inputFieldIcon,
    elevation: 1,
    paddingHorizontal: wp('5%'),
    paddingTop: hp('1.2%'),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp('1.5%'),
  },
  countLabel: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.footerText,
  },
  totalLabel: {
    ...TextStyles.poppinsRegularNormal,
    color: Colors.black,
  },
  heading: {
    ...TextStyles.poppinsExtraLargeNormal,
    color: Colors.black,
  },
  count: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.footerText,
    textAlign: 'center',
  },
  totalAmount: {
    ...TextStyles.poppinsRegularNormal,
    color: Colors.black,
    textAlign: 'center',
  },
});
