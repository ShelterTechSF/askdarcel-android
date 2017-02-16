import React from 'react';
import {
  View
} from 'react-native';

import MapView from 'react-native-maps';

import { mapStyles } from '../../styles';

const MapComponent = ({ initialRegion, markers }) => {
  return (
    <View style={mapStyles.container}>
      <MapView style={mapStyles.map} initialRegion={initialRegion}>
        {markers.map(marker => (
          <MapView.Marker 
            key={marker.coordinates.latitude}
            coordinate={marker.coordinates}
            title={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
}

export { MapComponent };
