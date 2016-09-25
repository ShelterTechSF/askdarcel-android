import React, { Component } from 'react'
import {
  Image,
  Text,
  View
} from 'react-native';

// import styles
import styles from '../styles/main';

class ResourceItem extends Component {
  // A single resource for the resources list
  
  render() {
    return (
      <View>
        <Text>
          {this.props.resource.name}
        </Text>
      </View>
    );
  }
}

export default ResourceItem;
