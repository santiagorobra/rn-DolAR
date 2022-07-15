import React from 'react';
import {View, Image} from 'react-native';

import {TextCustom} from '@components/TextCustom';
import {Nullable} from '@interfaces/globalInterfaces';

import styles from './styles';

interface Props {
  title: string;
  iconBase64: Nullable<string>;
}

export const SectionHeader = ({title, iconBase64}: Props) => {
  const uri = `data:image/png;base64,${iconBase64}`;
  return (
    <View style={styles.container}>
      {!!iconBase64 && <Image source={{uri}} style={styles.icon} />}
      <TextCustom style={styles.title} text={title} />
    </View>
  );
};
