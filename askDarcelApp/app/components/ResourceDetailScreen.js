import React, { Component } from 'react'
import {
  Image,
  Text,
  View
} from 'react-native';

// import styles
import styles from '../styles/main';

import ResourceDetail from './ResourceDetail';

class ResourceDetailScreen extends Component {
  // Single selected resource, detail view
  
  render() {
    return (
      <View>
        <ResourceDetail />
      </View>
    );
  }
}

export default ResourceDetailScreen;
