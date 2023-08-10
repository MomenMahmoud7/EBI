import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Button from '@app/components/Button';
import CategoryCard from '@app/components/CategoryCard';
import Error from '@app/components/Error';
import Header from '@app/components/Header';
import Loading from '@app/components/Loading';
import useCalculateSum from '@app/hooks/useCalculateSum';
import {startFetchingCategories} from '@app/store/actions/categories';
import {saveSelected} from '@app/store/actions/selected';
import {selectCategories} from '@app/store/selectors/categories';
import UNIT from '@app/theme/unit';

const Home = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    data,
    error = 'Something went wrong',
  } = useSelector(selectCategories);

  useEffect(() => {
    dispatch(startFetchingCategories());
  }, [dispatch]);

  const {min, max} = useCalculateSum();

  const onSave = () => {
    dispatch(saveSelected(true));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
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
    padding: 8 * UNIT,
  },
});

export default Home;
