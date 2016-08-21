import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

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

class CategoryView extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    let { categories } = this.props;
    let categoryList = categories.map((category, i) => 
      <Category category={category} onPress={this._onPressButton} key={i}/>
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
};

// let mapStateToProps = (state) => ({category: state.category});
// let actionCreators = (dispatch) => ({ categoryActions: bindActionCreators(categoryActions, dispatch) });

export default CategoryView;