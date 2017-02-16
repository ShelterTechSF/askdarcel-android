'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider, connect } from 'react-redux';
import Router from './Router';
import store from './config/store';
import { getUserLocation } from './actions';

class RootComponent extends Component {
  componentWillMount() {
    store.dispatch(getUserLocation());
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
};

export default RootComponent;
