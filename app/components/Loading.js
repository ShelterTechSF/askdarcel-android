import React, { Component } from 'react';
import {
  ActivityIndicator
} from 'react-native';

import { commonStyles } from '../styles';

class Loading extends Component {
  render() {
    return (
      <ActivityIndicator
        animating={this.props.isLoading}
        color="white"
        size="large"
        style={commonStyles.spinner}
      />
    )
  }
}

export default Loading;
