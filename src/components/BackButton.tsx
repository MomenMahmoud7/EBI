import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {HeaderBackButtonProps} from '@react-navigation/elements';

const BackButton: FC<HeaderBackButtonProps> = ({canGoBack, onPress}) => {
  if (!canGoBack) {
    return null;
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesomeIcon icon={faAngleLeft} size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 24,
  },
});

export default BackButton;
