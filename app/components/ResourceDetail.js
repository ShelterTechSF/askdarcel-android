import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { Loading, MapComponent } from './shared';
import { resourceStyles, commonStyles } from '../styles';

class ResourceDetail extends Component {
  // Single resources for detail view

  render() {
    let resource = this.props.resource;
    let { latitude, longitude } = resource.address;
    let initialRegion = {
      provider: "google",
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    let markers = [{coordinates: {latitude, longitude}, title: resource.name}];

    return (
      <View style={resourceStyles.container}>
        <MapComponent initialRegion={initialRegion} markers={markers} />
        <View style={resourceStyles.resourceDetail}>
          <View style={commonStyles.overline}>
            <Text style={resourceStyles.name}>
              Details for {resource.name}
            </Text>
          </View>
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
