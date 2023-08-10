import React from 'react';
import {StyleSheet, View} from 'react-native';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Text from '@app/components/Text';
import colors from '@app/theme/colors';
import UNIT from '@app/theme/unit';

const Loading = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={faSpinner}
        color={colors.primary}
        size={32 * UNIT}
      />
      <Text color="black" size="large" style={styles.text}>
        Loading...
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

export default Loading;
