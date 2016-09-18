import React, { Component } from 'react'
import {
  View,
  TextInput
} from 'react-native'

class SearchBar extends Component {
  render() {
    return (
      <View>
        <TextInput placeholder="I'm looking for..." />
      </View>
    )
  }
}

export default SearchBar;
