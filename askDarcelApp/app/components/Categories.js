import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import dismissKeyboard from 'dismissKeyboard';

// import styles
import styles from '../styles/main';
import Category from './Category';

import { fetchCategories } from '../actions/categoryActions';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    categories: store.category.list,
    fetched: store.category.fetched,
    fetching: store.category.fetching,
    categoryId: store.category.id,
    error: store.category.error
  };
})

class Categories extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCategories());
  }

  searchResources(categoryId) {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: this.props.categories[categoryId].name,
        component: ResourcesScreen,
        passProps: this.props.categories[categoryId]
      });
    } else {
      dismissKeyboard();
      this.props.navigator.push({
        title: this.props.categories[categoryId].name,
        name: 'resources',
        category: this.props.categories[categoryId]
      });
    }
  }

  _onButtonPress(idx) { 
    return console.warn("Pressed " + idx);
  }

  render() {
    let { categories } = this.props;
    let categoryList = categories.map((category, i) =>  
      <TouchableHighlight onPress={this._onButtonPress.bind(this, i)} key={i}>
        <View>
          <Category category={category} idx={i}/>
        </View>
      </TouchableHighlight>
    )
    return (
      <View>
        <Text>Browse Categories</Text>
        <ScrollView>
          {categoryList}
        </ScrollView>
      </View>
    );
  }
}

export default Categories;