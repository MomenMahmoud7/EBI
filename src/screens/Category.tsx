import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import CategoryItemCard from '@app/components/CategoryItemCard';
import Header from '@app/components/Header';
import Text from '@app/components/Text';
import useCalculateCategorySum from '@app/hooks/useCalculateCategorySum';
import useRoute from '@app/hooks/useRoute';
import {selectCategoryItems} from '@app/store/selectors/categoryItems';
import UNIT from '@app/theme/unit';

const Category = () => {
  const {
    params: {id, title},
  } = useRoute();
  const {bottom} = useSafeAreaInsets();

  const {isLoading, data, error} = useSelector(selectCategoryItems);

  const {min, max} = useCalculateCategorySum(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: bottom}}
      showsVerticalScrollIndicator={false}>
      <Header title={title} min={min} max={max} />
      <View style={styles.content}>
        {data[id].map(item => (
          <CategoryItemCard key={item.id} parentId={id} {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8 * UNIT,
  },
});

export default Category;
