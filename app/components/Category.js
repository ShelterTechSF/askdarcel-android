'use strict';

import React, { Component } from 'react'
import {
  Image,
  Text,
  View
} from 'react-native';

// import styles
import { categoryStyles } from '../styles';

class Category extends Component {
  // Single category for list in Categories view
  
  render() {
    let cat = this.props.category
    let img = {
      uri: cat.image_path
    }
    return (
      <View style={categoryStyles.container}>
        <Image source={img} style={categoryStyles.image} />
        <Text style={categoryStyles.name}>
          {cat.name}
        </Text>
      </View>
    );
  }
}

export default Category;
