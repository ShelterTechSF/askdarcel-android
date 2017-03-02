'use strict';

import React, { Component } from 'react'
import {
  View,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { commonStyles } from '../styles';
import { searchResources } from '../actions';

class SearchBar extends Component {
  // Search input component
  state = {
    search: ''
  }

  _onSubmit() { 
    if(this.state.search.length) {
      // Set the category in the state
      this.props.searchResources(this.state.search);
      // Navigate to the resources list
      Actions.resources();
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={commonStyles.input} 
          placeholder="I'm looking for..."
          ref="input"
          onChangeText={(text) => this.setState({search: text})}
          value={this.state.search}
          onSubmitEditing={this._onSubmit.bind(this)}
        />
      </View>
    )
  }
}

export default connect(null, { searchResources })(SearchBar);
