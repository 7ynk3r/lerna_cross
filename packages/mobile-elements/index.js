import React from 'react';
import { Text } from 'react-native';
import { BaseButton } from 'base-elements';


export class MobileButton extends BaseButton {
  render() {
    return <Text {...this.props} />;
  }
}
