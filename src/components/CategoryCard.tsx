import React, {FC, useMemo} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Text from '@app/components/Text';
import useNavigation from '@app/hooks/useNavigation';
import {startFetchingCategoryItems} from '@app/store/actions/categoryItems';
import {selectSelected} from '@app/store/selectors/selected';
import colors from '@app/theme/colors';
import {CategoryType} from '@app/types/Category.type';

const CategoryCard: FC<CategoryType> = ({id, title, image}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const selected = useSelector(selectSelected);

  const isCategorySelected = useMemo(() => !!selected[id], [id, selected]);

  const width = useMemo(() => {
    const screenWidth = Dimensions.get('screen').width;
    return (screenWidth - 48) / 2;
  }, []);

  return (
    <TouchableOpacity
      style={[styles.container, {width}, isCategorySelected && styles.selected]}
      onPress={() => {
        dispatch(startFetchingCategoryItems(id));
        navigate('Category', {id, title});
      }}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text size="small">{title}</Text>
        <FontAwesomeIcon icon={faAngleRight} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: colors.lightgray,
  },
  selected: {
    borderColor: colors.primary,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
});

export default CategoryCard;
