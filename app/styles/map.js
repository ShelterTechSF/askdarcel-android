import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const mapSize = width;

const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  userMarker: {
    backgroundColor: '#40B',
    height: 10,
    width: 10,
    borderRadius: 5
  },
});

export { mapStyles };
