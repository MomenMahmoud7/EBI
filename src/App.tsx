import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import 'react-native-gesture-handler';

import ErrorBoundary from '@app/components/ErrorBoundry';
import AppNavigation from '@app/navigations/AppNavigation';
import {persistor, store} from '@app/store';

const App = () => (
  <>
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
    />
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </>
);

export default App;
