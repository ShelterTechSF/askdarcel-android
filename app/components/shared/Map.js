import React, { Component } from 'react';
import {
  View,
  Dimensions
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
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
  
  render() {
    let { initialRegion, style, userLocation } = this.props;
    console.warn(JSON.stringify(userLocation));
    initialRegion.latitude = Number.parseFloat(initialRegion.latitude);
    initialRegion.longitude = Number.parseFloat(initialRegion.longitude);
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
            <Marker title="You are here" coordinate={{latitude: userLocation.latitude, longitude: userLocation.longitude}}>

            </Marker>
          }
        </MapView>
      </View>
    );
  }
}

export { MapComponent };
