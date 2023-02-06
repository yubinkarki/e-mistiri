import React from 'react';
import {Switch} from 'react-native';

import {Colors} from '@app/constants';

export default function ToggleButton({isSwitchOn, onToggleSwitch}) {
  return (
    <Switch
      value={isSwitchOn}
      onValueChange={onToggleSwitch}
      trackColor={{
        true: Colors.textLink,
        false: Colors.inputFieldOutline,
      }}
      thumbColor={Colors.white}
    />
  );
}
