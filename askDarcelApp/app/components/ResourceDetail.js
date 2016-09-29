'use strict';

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
    categoryId: store.category.id,
    categoryName: store.category.name,
    resource: store.resource.current,
  };
})

class ResourceDetail extends Component {
  // Single resources for detail view

  render() {
    let resource = this.props.resource;
    return (
      <View>
        <Text style={styles.resourceDetail}>
          Details for {resource.name}
        </Text>
      </View>
    );
  }
}

export default ResourceDetail;
