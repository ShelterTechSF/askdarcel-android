'use strict';

import React, { Component } from 'react'
import {
  Image,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

import { connect } from 'react-redux';
import { mapStyles, resourceStyles } from '../styles';

@connect((store) => {
  return {
    categoryId: store.category.id,
    categoryName: store.category.name,
    resource: store.resource.current,
  };
})

class ResourceDetail extends Component {
  // Single resources for detail view

  render() {
    let resource = this.props.resource;
    return (
      <View>
        <View style={mapStyles.container}>
          <MapView
            style={mapStyles.map}
            initialRegion={{
              provider: "google", 
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View style={resourceStyles.container}>
          <Text style={resourceStyles.name}>
            Details for {resource.name}
          </Text>
        </View>
      </View>
    );
  }
}

export default ResourceDetail;
