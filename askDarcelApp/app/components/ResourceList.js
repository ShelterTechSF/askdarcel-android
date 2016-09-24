import React, { Component } from 'react'
import {
  Image,
  Text,
  View
} from 'react-native';

// import styles
import styles from '../styles/main';

class ResourceList extends Component {
  // Single resources for list in Categories view
  
  render() {
    let resources = this.props.resources
    
    return (
      <View>
        <Text>
          A list of resources
        </Text>
      </View>
    );
  }
}

export default ResourceList;