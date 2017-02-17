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
});

export { mapStyles };
