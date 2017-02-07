'use strict';
import React, { Component } from 'react'
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { commonStyles } from '../styles';
import Category from './Category';
import { fetchCategories, setCategory } from '../actions/categoryActions';


class Categories extends Component {

  componentWillMount() {
    this.props.fetchCategories();
  }

  searchResources(categoryId) {
    let idx = categoryId - 1;
    Actions.resources();
  }

  _onButtonPress(category, idx) { 
    this.props.setCategory(category, idx);
    this.searchResources(idx);
  }

  render() {
    let { categories } = this.props;
    let categoryList = categories.map((category, i) =>  
      <TouchableHighlight onPress={this._onButtonPress.bind(this, category.name, category.id)} key={i}>
        <View>
          <Category category={category} idx={i}/>
        </View>
      </TouchableHighlight>
    )
    return (
      <View>
        <Text style={commonStyles.title}>Browse Categories</Text>
        <ScrollView>
          {categoryList}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.list,
    fetched: state.category.fetched,
    fetching: state.category.fetching,
    categoryId: state.category.id,
    error: state.category.error
  };
};

export default connect(mapStateToProps, { fetchCategories, setCategory })(Categories);