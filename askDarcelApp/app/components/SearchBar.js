import React, { Component } from 'react'
import {
  View,
  TextInput
} from 'react-native'

import styles from '../styles/main';

class SearchBar extends Component {
  render() {
    return (
      <View>
        <TextInput 
          placeholder="I'm looking for..."
          ref="input"
        />
      </View>
    )
  }
}

export default SearchBar;
