import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, TextStyles} from '@app/constants';

const Styles = StyleSheet.create({
  buttonStyles: {
    width: 'auto',
  },
  labelStyles: {
    ...TextStyles.poppinsExtraLargeNormal,
  },
  contentStyles: {
    height: '100%',
  },
});

export default function PrimaryButton({
  buttonLabel,
  buttonHeight,
  onPressHandler,
  buttonWidth,
  buttonIconName,
  buttonIconSize,
  buttonIconColor,
  buttonRadius,
  isOutlined,
}) {
  return (
    <Button
      mode={isOutlined ? 'outlined' : 'contained'}
      color={Colors.textLink}
      uppercase={false}
      style={{
        ...Styles.buttonStyles,
        height: buttonHeight,
        width: buttonWidth,
        borderRadius: buttonRadius,
      }}
      labelStyle={Styles.labelStyles}
      contentStyle={Styles.contentStyles}
      icon={() => (
        <MCI
          name={buttonIconName}
          size={buttonIconSize}
          color={buttonIconColor}
        />
      )}
      onPress={() => {
        onPressHandler();
      }}>
      {buttonLabel}
    </Button>
  );
}
