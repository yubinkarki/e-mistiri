import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, TextStyles} from '@app/constants';

const Styles = StyleSheet.create({
  labelStyles: {
    ...TextStyles.poppinsExtraLargeNormal,
  },
  contentStyles: {
    height: '100%',
  },
});

export default function PrimaryButton({
  buttonLabel = 'Label',
  buttonHeight = 40,
  buttonWidth,
  buttonIconName,
  buttonIconSize,
  buttonIconColor,
  buttonRadius,
  outlined,
  onPressHandler,
  ...rest
}) {
  return (
    <Button
      mode={outlined ? 'outlined' : 'contained'}
      uppercase={false}
      style={{
        height: buttonHeight,
        width: buttonWidth,
        borderRadius: buttonRadius,
        backgroundColor: outlined
          ? 'transparent'
          : rest.disabled
          ? Colors.gray
          : Colors.textLink,
      }}
      labelStyle={{
        ...Styles.labelStyles,
        color: outlined ? Colors.textLink : Colors.white,
      }}
      contentStyle={Styles.contentStyles}
      icon={() => (
        <MCI
          name={buttonIconName}
          size={buttonIconSize}
          color={buttonIconColor}
        />
      )}
      onPress={() => onPressHandler()}
      {...rest}>
      {buttonLabel}
    </Button>
  );
}
