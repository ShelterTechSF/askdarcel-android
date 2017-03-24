import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { Card, Loading, MapComponent } from './shared';
import Service from './Service';
import LaunchBar from './LaunchBar';
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
    }
    let markers = [{coordinates: {latitude, longitude}, title: resource.name}];

    return (
      <View style={resourceStyles.container}>
        <MapComponent initialRegion={initialRegion} 
                      markers={markers} 
                      userLocation={this.props.userLocation}/>
        <ScrollView style={{flex: 2}}>
          <View>
            <Text style={resourceStyles.name}>
              Details for {resource.name}
            </Text>
            <LaunchBar resource={resource} />
            <Card>
              <Text>Description</Text>
              <Text>{resource.long_description}</Text>
            </Card>
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
    userLocation: state.user.location
  };
};

export default connect(mapStateToProps)(ResourceDetail);
