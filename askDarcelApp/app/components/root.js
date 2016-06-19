import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from '../reducers';
import thunk from 'redux-thunk';

// import components needed
import NavBar from './NavBar';

// import styles
import styles from '../styles/main';


const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

console.log('Initial state: ', store.getState());

class RootComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <NavBar />
      </Provider>
    )
  }
};

export default RootComponent;