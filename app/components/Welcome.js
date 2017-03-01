'use strict';

import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Header from './Header';
import SearchBar from './SearchBar';
import Categories from './Categories';

import { commonStyles } from '../styles';

class Welcome extends Component {
  // First screen (after login)
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <Header />
        <SearchBar />
        <Categories />
      </View>
    )
  }
};

export default Welcome;
