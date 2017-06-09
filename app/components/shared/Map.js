import React, { Component } from 'react';
import {
  View,
  Dimensions
} from 'react-native';

import MapView, { Marker, Polyline } from 'react-native-maps';
import { mapStyles } from '../../styles';

class MapComponent extends Component { 
  state = {
    markers: this.props.markers || []
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.markers) {
      this.setState({ markers: nextProps.markers });
    }
  }

  processInitialRegion(region = {}) {
    const defaultValues = {
      latitude: 37.7759,
      longitude: -122.414,
      latitudeDelta: 0.0523,
      longitudeDelta: 0.042
    };
    let result = {...defaultValues, ...region};
    result.latitude = Number.parseFloat(result.latitude);
    result.longitude = Number.parseFloat(result.longitude);
    result.latitudeDelta = Number.parseFloat(result.latitudeDelta);
    result.longitudeDelta = Number.parseFloat(result.longitudeDelta);
    return result;
  }
  
  render() {
    let { initialRegion, style, userLocation, route } = this.props;
    initialRegion = this.processInitialRegion(initialRegion);
    
    return (
      <View style={[mapStyles.container, style]}>
        <MapView style={mapStyles.map} initialRegion={initialRegion} liteMode>
          {this.state.markers.map((marker, i) => {
            let coordinate = {
              latitude: Number.parseFloat(marker.coordinates.latitude),
              longitude: Number.parseFloat(marker.coordinates.longitude)
            };

            return (<Marker 
              key={marker.coordinates.latitude + i}
              coordinate={coordinate}
              title={marker.title}
            />)
          })}
          {userLocation && 
            <Marker title="You are here" 
                    coordinate={{latitude: userLocation.latitude, longitude: userLocation.longitude}}>
              <View style={mapStyles.userMarker} />
            </Marker>
          }
          {route &&
            <Polyline coordinates={route} />
          }
        </MapView>
      </View>
    );
  }
}

export { MapComponent };
