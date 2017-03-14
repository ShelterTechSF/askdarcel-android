import React, { Component } from 'react';
import {
  Linking,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

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
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <View>
          {this.props.imageSource && <Image source={this.props.imageSource} />}
          {this.props.displayText && <Text>{this.props.displayText}</Text>}
        </View>
      </TouchableOpacity>
    );
  }
}

export { LinkLauncher };
