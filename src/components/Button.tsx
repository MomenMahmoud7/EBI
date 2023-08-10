import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Text from '@app/components/Text';
import colors from '@app/theme/colors';
import UNIT from '@app/theme/unit';

type ButtonPropsType = {
  onPress: () => void;
};

const Button: FC<PropsWithChildren & ButtonPropsType> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text color="white" bold>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 16 * UNIT,
    padding: 16 * UNIT,
    borderRadius: 4 * UNIT,
    backgroundColor: colors.primary,
  },
});
