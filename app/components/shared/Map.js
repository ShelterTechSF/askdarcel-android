import React from 'react';
import {
  View,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';
import { mapStyles } from '../../styles';

const MapComponent = ({ initialRegion, markers, style }) => {
  const HORIZONTAL_PADDING = 12;
  const VERTICAL_PADDING = 6;
  const { width } = Dimensions.get('window');
  const mapSize = width - (HORIZONTAL_PADDING * 2);

  markers = markers || [];
  return (
    <View style={mapStyles.container}>
      <MapView style={[mapStyles.map, style]} initialRegion={initialRegion}>
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
