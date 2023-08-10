import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Text from '@app/components/Text';
import colors from '@app/theme/colors';

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
    margin: 16,
    padding: 16,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});
