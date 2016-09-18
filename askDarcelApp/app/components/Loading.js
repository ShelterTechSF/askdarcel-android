import React, { Component } from 'react';
import {
  ActivityIndicator
} from 'react-native';

import styles from '../styles/main';

class Loading extends Component {
  render() {
    return (
      <ActivityIndicator
        animating={this.props.isLoading}
        color="white"
        size="large"
        style={styles.spinner}
      />
    )
  }
}

export default Loading;
