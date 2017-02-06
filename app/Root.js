import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';
import store from './config/store';

const RootComponent = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    </Provider>
  );
};

export default RootComponent;
