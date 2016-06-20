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

  render() {
    return (
      <div>
      </div>
    );
  }
};

let mapStateToProps = (state) => ({category: state.category});
let actionCreators = (dispatch) => ({ categoryActions: bindActionCreators(categoryActions, dispatch) });

export default connect(mapStateToProps, actionCreators)(CategoryView);