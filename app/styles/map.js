import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const mapSize = width;

const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: mapSize,
    width: mapSize,
    position: 'absolute',
    top: 0,
  },
});

export { mapStyles };
