'use strict';

import React, { Component } from 'react'
import {
  Image,
  Text,
  View
} from 'react-native';

// import styles
import { resourceStyles } from '../styles';

class ResourceItem extends Component {
  // A single resource for the resources list
  
  render() {
    return (
      <View>
        <Text style={resourceStyles.listItem}>
          {this.props.resource.name}
        </Text>
      </View>
    );
  }
}

export default ResourceItem;
