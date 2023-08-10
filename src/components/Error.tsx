import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Text from '@app/components/Text';
import colors from '@app/theme/colors';
import UNIT from '@app/theme/unit';

const Error: FC<{error?: string}> = ({error = 'Something went wrong'}) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={faCircleExclamation}
        color={colors.danger}
        size={100 * UNIT}
      />
      <Text color="danger" size="xlarge" bold style={styles.text}>
        Error
      </Text>
      <Text color="danger" size="large">
        {error}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 24 * UNIT,
  },
});

export default Error;
