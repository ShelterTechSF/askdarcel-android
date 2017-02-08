'use strict';
import React, { Component } from 'react'
import {
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
  // Categories list for the welcome screen
  componentWillMount() {
    this.props.fetchCategories();
  }

  _onButtonPress(category, id) { 
    // Set the category in the state
    this.props.setCategory(category, id);
    // Navigate to the resources list
    Actions.resources();
  }

  render() {
    let { categories } = this.props;
    let categoryList = categories.map((category) =>  
      <TouchableHighlight onPress={this._onButtonPress.bind(this, category.name, category.id)} key={category.id}>
        <View>
          <Category category={category}/>
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