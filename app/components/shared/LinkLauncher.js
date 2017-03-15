import React, { Component } from 'react';
import {
  Linking,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class LinkLauncher extends Component {
  onPress() {
    Linking.canOpenURL(this.props.url).then(supported => { 
      if (supported) { 
        Linking.openURL(this.props.url); 
      } else {
       console.log('Don\'t know how to open URI: ' + this.props.url); 
      } 
    });
  } 

  render() {
    return (
      <Icon.Button name={this.props.iconName} backgroundColor="#3b5998" onPress={this.onPress.bind(this)}>
        {this.props.displayText}
      </Icon.Button>
    );
  }
}

export { LinkLauncher };
