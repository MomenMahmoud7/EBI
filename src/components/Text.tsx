import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, Text as NativeText, TextStyle} from 'react-native';

import colors from '@app/theme/colors';

type TextPropsType = {
  style?: TextStyle;
  bold?: boolean;
  color?: keyof typeof colors;
  size?: 'small' | 'normal' | 'large' | 'xlarge';
};

const Text: FC<PropsWithChildren & TextPropsType> = ({
  children,
  style,
  bold = false,
  color = 'text',
  size = 'normal',
}) => {
  return (
    <NativeText
      style={[
        {color: colors[color]},
        styles[size],
        bold && styles.bold,
        style,
      ]}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  small: {
    fontSize: 14,
  },
  normal: {
    fontSize: 15,
  },
  large: {
    fontSize: 18,
  },
  xlarge: {
    fontSize: 32,
  },
});

export default Text;
