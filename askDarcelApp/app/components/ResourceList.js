import React, { Component } from 'react'
import {
  Image,
  Text,
  View
} from 'react-native';

// import styles
import styles from '../styles/main';

import { connect } from 'react-redux';

@connect((store) => {
  return {
    fetched: store.resource.fetched,
    fetching: store.resource.fetching,
    categoryId: store.category.id,
    categoryName: store.category.name,
    error: store.category.error,
    resources: store.resource.list,
  };
})

class ResourceList extends Component {
  // Single resources for list in Categories view
  
  render() {
    let resources = this.props.resources
    
    return (
      <View>
        <Text>
          A list of resources for 
        </Text>
      </View>
    );
  }
}

export default ResourceList;