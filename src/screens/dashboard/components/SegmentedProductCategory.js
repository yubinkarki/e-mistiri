import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import {Colors, TextStyles} from '@app/constants';

export default function SegmentedProductCategory() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SegmentedControl
      values={['Popular Product', 'Top Rated', 'Recommended']}
      selectedIndex={selectedIndex}
      onChange={event =>
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
      }
      style={Styles.mainContainer}
      tintColor={Colors.textLink}
      fontStyle={Styles.inactiveText}
      activeFontStyle={Styles.activeFont}
      backgroundColor={Colors.dashboardProductCategory}
    />
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    height: 45,
  },
  inactiveText: {
    ...TextStyles.poppinsSmallLight,
    color: Colors.black,
  },
  activeFont: {
    ...TextStyles.poppinsSmallNormal,
    color: Colors.white,
  },
});
