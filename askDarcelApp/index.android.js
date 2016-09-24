'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  BackAndroid,
  Navigator,
  ToolbarAndroid,
  View
} from 'react-native';

import { Provider } from 'react-redux';

import styles from './app/styles/main';
import store from './app/config/store';

import WelcomeScreen from './app/components/WelcomeScreen';
import ResourcesScreen from './app/components/ResourcesScreen';
import SingleResourceScreen from './app/components/SingleResourceScreen';

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

const RouteMapper = (route, navigationOperations, onComponentRef) => {
  _navigator = navigationOperations;
  if (route.name === 'welcome') {
    console.warn("Welcome");
    return (
      <WelcomeScreen navigator={navigationOperations} />
    );
  } else if (route.name === 'resources') {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          onIconClicked={navigationOperations.pop}
          style={styles.toolbar}
          titleColor="white"
          title="Resources" />
        <ResourcesScreen
          style={{flex: 1}}
          navigator={navigationOperations}
        />
      </View>
    );
  }
};

class askDarcelApp extends Component {
  render() {
    let initialRoute = {name: 'welcome'};
    return (
      <Provider store={store}>
        <Navigator
          style={{flex: 1}}
          initialRoute={initialRoute}
          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
          renderScene={RouteMapper}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('askDarcelApp', () => askDarcelApp);

module.exports = askDarcelApp;
