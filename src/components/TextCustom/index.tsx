import React from 'react';
import {Text} from 'react-native';

import {TextCustomProps} from '@interfaces/componentsProps';

import styles from './styles';

export const TextCustom = ({text, style}: TextCustomProps) => (
  <Text style={[styles.text, style]}>{text}</Text>
);
