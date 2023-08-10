import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Button from '@app/components/Button';
import CategoryCard from '@app/components/CategoryCard';
import Header from '@app/components/Header';
import Text from '@app/components/Text';
import useCalculateSum from '@app/hooks/useCalculateSum';
import {startFetchingCategories} from '@app/store/actions/categories';
import {saveSelected} from '@app/store/actions/selected';
import {selectCategories} from '@app/store/selectors/categories';

const Home = () => {
  const dispatch = useDispatch();

  const {isLoading, data, error} = useSelector(selectCategories);

  useEffect(() => {
    dispatch(startFetchingCategories());
  }, [dispatch]);

  const {min, max} = useCalculateSum();

  const onSave = () => {
    dispatch(saveSelected(true));
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Event Builder" min={min} max={max} />
        <View style={styles.content}>
          {data.map(item => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
      <Button onPress={onSave}>Save</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '7.5%',
  },
  content: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 8,
  },
});

export default Home;
