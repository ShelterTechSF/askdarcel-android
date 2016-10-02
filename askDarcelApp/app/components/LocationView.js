'use strict';

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native';

import styles from '../styles/main';

import { getUserLocation } from '../actions/userActions';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    location: store.user.location,
    fetching: store.user.fetching,
    error: store.user.error
  };
})

class LocationView extends Component {
  componentWillMount() {
    this.props.dispatch(getUserLocation());
  }
  render() {
    let lat, long;
    if(this.props.location) {
      lat = this.props.location.coords.latitude;
      long = this.props.location.coords.longitude;
    }
    return (
      <View>
        <Text>Fetching: {this.props.fetching}</Text>
        <Text>Location: {lat} {long}</Text>
        <Text>Error: {this.props.error}</Text>
      </View>
    )
  }
}

export default LocationView;
