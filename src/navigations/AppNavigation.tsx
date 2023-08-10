import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import BackButton from '@app/components/BackButton';
import Category from '@app/screens/Category';
import Home from '@app/screens/Home';
import Result from '@app/screens/Result';
import {selectSaved} from '@app/store/selectors/selected';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const saved = useSelector(selectSaved);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: 'transparent'},
        title: '',
        headerLeft: BackButton,
        headerLeftLabelVisible: false,
      }}>
      {saved ? (
        <Stack.Screen
          name="Result"
          component={Result}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Category" component={Category} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
