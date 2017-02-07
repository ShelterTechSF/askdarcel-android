import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native';

// import styles
import { commonStyles } from '../styles';

class Header extends Component {
  // Return the minimal nav bar unless the current view in state is the homepage
  
  render() {
    return (
      <View>
        <Text style={commonStyles.header}>
          Ask Darcel
        </Text>
        <Text>
          Find the best community resources for your needs
        </Text>
      </View>
    );
  }
}

export default Header;
