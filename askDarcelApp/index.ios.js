
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import RootComponent from './app/components/root';

class askDarcelApp extends Component {
  render() {
    return (
      <RootComponent />
    );
  }
}

AppRegistry.registerComponent('askDarcelApp', () => askDarcelApp);
