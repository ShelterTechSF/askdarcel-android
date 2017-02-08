'use strict';

import React, { Component } from 'react'
import {
  View,
  TextInput
} from 'react-native'

import { commonStyles } from '../styles';

class SearchBar extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={commonStyles.input} 
          placeholder="I'm looking for..."
          ref="input"
        />
      </View>
    )
  }
}

export default SearchBar;
