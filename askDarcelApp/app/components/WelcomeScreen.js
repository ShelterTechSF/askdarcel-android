'use strict';

import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View
} from 'react-native';

// import components needed
import Header from './Header';
import SearchBar from './SearchBar';
import Categories from './Categories';
import LocationView from './LocationView';

// import styles
import styles from '../styles/main';

class WelcomeScreen extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <LocationView />
        <Header />
        <SearchBar />
        <Categories navigator={this.props.navigator}/>
      </View>
    )
  }
};

export default WelcomeScreen;
