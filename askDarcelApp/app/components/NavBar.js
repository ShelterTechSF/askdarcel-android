import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View
} from 'react-native';

// import styles
import styles from '../styles/main';

class NavBar extends Component {
  // Return the minimal nav bar unless the current view in state is the homepage
  
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Ask Darcel
        </Text>
        <Text>
          Find the best community resources for your needs
        </Text>
        <TextInput placeholder="I'm looking for..." />
      </View>
    );
  }
}

export default NavBar;