import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import { Provider } from 'react-redux';

// import components needed
import WelcomeScreen from './WelcomeScreen';
import SimpleNavigationApp from './SimpleNavigator';

import store from '../config/store';

console.log('Initial state: ', store.getState());

class RootComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>
    )
  }
};

export default RootComponent;