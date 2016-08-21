import React, { Component } from 'react'
import {
  Image,
  Text,
  TouchableHighlight,
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
        <TouchableHighlight onPress={this.props.onPress}>
          <Text>
            {cat.name}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Category;
