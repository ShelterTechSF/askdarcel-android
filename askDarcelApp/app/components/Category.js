'use strict';

import React, { Component } from 'react'
import {
  Image,
  Text,
  View
} from 'react-native';

// import styles
import styles from '../styles/main';

class Category extends Component {
  // Single category for list in Categories view
  
  render() {
    let cat = this.props.category
    let img = {
      uri: cat.image_path
    }
    return (
      <View>
        <Image source={img} />
        <Text style={styles.category}>
          {cat.name}
        </Text>
      </View>
    );
  }
}

export default Category;
