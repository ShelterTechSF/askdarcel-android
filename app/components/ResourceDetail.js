'use strict';

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

import { connect } from 'react-redux';
import Loading from './Loading';
import { mapStyles, resourceStyles } from '../styles';

class ResourceDetail extends Component {
  // Single resources for detail view

  render() {
    let resource = this.props.resource;
    let { latitude, longitude } = resource.address;
    latitude = Number.parseFloat(latitude);
    longitude = Number.parseFloat(longitude);
    return (
      <View style={resourceStyles.container}>
        <View style={mapStyles.container}>
          <MapView
            style={mapStyles.map}
            initialRegion={{
              provider: "google", 
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <MapView.Marker coordinate={{latitude, longitude}} />
          </MapView>
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

const mapStateToProps = state => {
  return {
    categoryId: state.category.id,
    categoryName: state.category.name,
  };
};

export default connect(mapStateToProps)(ResourceDetail);
