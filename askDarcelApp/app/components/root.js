import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View
} from 'react-native';

import { Provider } from 'react-redux';

// import components needed
import NavBar from './NavBar';
import Categories from './Categories';

// import styles
import styles from '../styles/main';

import store from '../config/store';

console.log('Initial state: ', store.getState());

class RootComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavBar />
          <Categories {...this.props} />
        </View>
      </Provider>
    )
  }
};

export default RootComponent;