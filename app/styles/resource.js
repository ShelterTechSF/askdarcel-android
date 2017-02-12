import { StyleSheet} from 'react-native';

const resourceStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  listItem: {
    fontSize: 20,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
  },
  resourceDetail: {
    flex: 1,
    fontSize: 20,
    marginLeft: 15,
  },
});

export { resourceStyles };
