import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { Loading, MapComponent } from './shared';
import Service from './Service';
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
        <ScrollView style={{flex: 2}}>
          <View>
            <Text style={resourceStyles.name}>
              Details for {resource.name}
            </Text>
            <Text style={resourceStyles.name}>
              Website {resource.website}
            </Text>
            <Text>Test</Text>
            {resource.services.map(service => <Service key={service.id} service={service} />)}
          </View>
        </ScrollView>
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
