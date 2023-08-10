import React, {FC, useMemo} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {faCheck, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import _get from 'lodash/get';

import Text from '@app/components/Text';
import {addSelected, removeSelected} from '@app/store/actions/selected';
import {selectSelected} from '@app/store/selectors/selected';
import colors from '@app/theme/colors';
import {CategoryItemType} from '@app/types/Category.type';

const CategoryItemCard: FC<CategoryItemType & {parentId: number}> = ({
  parentId,
  ...item
}) => {
  const {id, title, image, minBudget, maxBudget} = item;
  const dispatch = useDispatch();

  const selected = useSelector(selectSelected);

  const width = useMemo(() => {
    const screenWidth = Dimensions.get('screen').width;
    return (screenWidth - 48) / 2;
  }, []);

  const isCategoryItemSelected = useMemo(
    () => !!_get(selected, [parentId, `-${id}`]),
    [id, parentId, selected],
  );

  const onCardPress = () => {
    if (isCategoryItemSelected) {
      return dispatch(removeSelected({parentId, item}));
    }
    return dispatch(addSelected({parentId, item}));
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {width},
        isCategoryItemSelected && styles.selected,
      ]}
      onPress={onCardPress}>
      <View style={styles.icon}>
        {isCategoryItemSelected ? (
          <FontAwesomeIcon icon={faCheck} color={colors.white} />
        ) : (
          <FontAwesomeIcon icon={faPlus} color={colors.white} />
        )}
      </View>
      <View style={styles.imageWrapper}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text size="small">{title}</Text>
        <Text color="black" size="small" bold>
          $ {minBudget.toLocaleString()} - {maxBudget.toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    margin: 8,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: colors.lightgray,
  },
  selected: {
    borderColor: colors.primary,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 6,
    zIndex: 100,
    borderRadius: 20,
    backgroundColor: colors.lightblack,
  },
  imageWrapper: {
    overflow: 'hidden',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  image: {
    height: 110,
    width: '100%',
  },
  content: {
    padding: 12,
  },
});

export default CategoryItemCard;
