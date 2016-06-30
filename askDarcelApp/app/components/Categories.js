import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native';

// import styles
import styles from '../styles/main';

import * as categoryActions from '../actions/categoryActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CategoryView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    categoryActions.fetchCategories();
    console.log("CAT PROPS ___________", this.props);
  }

  render() {
    return (
      <View>
        <Text>Browse Categories</Text>
        {
          this.props.category.categories.list.map(category => {
            <Text>category.name</Text>
          })
        }
      </View>
    );
  }
};

let mapStateToProps = (state) => ({category: state.category});
let actionCreators = (dispatch) => ({ categoryActions: bindActionCreators(categoryActions, dispatch) });

export default connect(mapStateToProps, actionCreators)(CategoryView);