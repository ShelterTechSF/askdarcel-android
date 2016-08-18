import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native';

// import styles
import styles from '../styles/main';

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
    const { categories } = this.props;
    const catNames = categories.map(cat => <Text>{cat.name}</Text>)
    return (
      <View>
        <Text>Browse Categories</Text>
        {catNames}
      </View>
    );
  }
};

// let mapStateToProps = (state) => ({category: state.category});
// let actionCreators = (dispatch) => ({ categoryActions: bindActionCreators(categoryActions, dispatch) });

export default CategoryView;