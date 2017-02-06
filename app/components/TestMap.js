import MapView from 'react-native-maps';

import React, {
  Component,
} from 'react';

import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    height: 200,
    width: null,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class TestMap extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            provider: "google", 
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }

}

export default TestMap;