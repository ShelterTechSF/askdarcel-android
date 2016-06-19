
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import RootComponent from './app/components/root';

// var REQUEST_URL = 'http://localhost:3000/categories';

class askDarcelApp extends Component {
  render() {
    return (
      <RootComponent />
    );
  }
}

AppRegistry.registerComponent('askDarcelApp', () => askDarcelApp);
