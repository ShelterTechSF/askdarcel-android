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
import { Loading } from './shared';
import { fetchCategories, setCategory, fetchResources } from '../actions';


class Categories extends Component {
  // Categories list for the welcome screen
  componentWillMount() {
    this.props.fetchCategories();
  }

  _onButtonPress(category, id) { 
    // Set the category in the state
    this.props.setCategory(category, id);
    // Fetch the resources
    this.props.fetchResources(id);
    // Navigate to the resources list
    Actions.resources();
  }

  renderCategories() {
    if (this.props.fetching) {
      return <Loading size={'large'} />;
    } 

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

  render() {
    return this.renderCategories();
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

export default connect(mapStateToProps, { fetchCategories, setCategory, fetchResources })(Categories);