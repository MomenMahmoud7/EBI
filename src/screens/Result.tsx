import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Button from '@app/components/Button';
import Text from '@app/components/Text';
import useCalculateSum from '@app/hooks/useCalculateSum';
import {saveSelected} from '@app/store/actions/selected';
import colors from '@app/theme/colors';
import UNIT, {SCREEN_WIDTH} from '@app/theme/unit';

const Result = () => {
  const dispatch = useDispatch();

  const {min, max} = useCalculateSum();

  const onEdit = () => {
    dispatch(saveSelected(false));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={styles.content}>
          <Text color="black" size="large" bold style={styles.marginBottom}>
            Event Saved!
          </Text>
          <Text color="black" size="xlarge" bold style={styles.marginBottom}>
            {`${min ? `$${min.toLocaleString()}` : ''} - ${
              max ? max.toLocaleString() : ''
            }`}
          </Text>
          <FontAwesomeIcon icon={faStar} size={36 * UNIT} />
        </View>
      </View>
      <Button onPress={onEdit}>Edit</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: '7.5%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    borderRadius: SCREEN_WIDTH * 0.6,
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.6,
    backgroundColor: colors.white,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 20 * UNIT,
  },
});

export default Result;
