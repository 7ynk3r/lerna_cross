import React from 'react';
import { Text } from 'react-native';
import { BaseButton, BaseButtonColor } from '@m/base-elements';


export class MobileButton extends BaseButton {
  render() {
    return <Text {...this.props} />;
  }
}

export const MobileButtonColor = BaseButtonColor;
