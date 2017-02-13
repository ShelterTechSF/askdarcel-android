'use strict';

import React from 'react'
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { resourceStyles } from '../styles';

const ResourceItem = ({resource, onPress}) => {
  // A single resource for the resources list
  
  return (
    <TouchableHighlight onPress={onPress}>
      <Text style={resourceStyles.listItem}>
        {this.props.resource.name}
      </Text>
    </TouchableHighlight>
  );
}

export default ResourceItem;
