import React, { Component } from 'react';
import {
  View,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';
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
    let { initialRegion, style } = this.props;
    initialRegion.latitude = Number.parseFloat(initialRegion.latitude);
    initialRegion.longitude = Number.parseFloat(initialRegion.longitude);
    return (
      <View style={mapStyles.container}>
        <MapView style={[mapStyles.map, style]} initialRegion={initialRegion} liteMode>
          {this.state.markers.map(marker => {
            let coordinate = {
              latitude: Number.parseFloat(marker.coordinates.latitude),
              longitude: Number.parseFloat(marker.coordinates.longitude)
            };

            return (<MapView.Marker 
              key={marker.coordinates.latitude}
              coordinate={coordinate}
              title={marker.title}
            />)
          })}
        </MapView>
      </View>
    );
  }
}

export { MapComponent };
