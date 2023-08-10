import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import Text from '@app/components/Text';

type HeaderPropsType = {
  title: string;
  min?: number;
  max?: number;
};

const Header: FC<HeaderPropsType> = ({title, min = 0, max = 0}) => {
  return (
    <View>
      <Text color="black" size="large" bold style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subTitle}>
        {`Add to your event to view our
cost estimate.`}
      </Text>
      <Text color="black" size="xlarge" bold style={styles.cost}>
        {`${min ? `$${min.toLocaleString()}` : ''} - ${
          max ? max.toLocaleString() : ''
        }`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: 14,
  },
  subTitle: {
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 34,
  },
  cost: {
    textAlign: 'center',
    marginBottom: 32,
  },
});

export default Header;
