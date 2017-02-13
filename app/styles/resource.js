import { StyleSheet} from 'react-native';

const resourceStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  listItem: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  name: {
    fontSize: 18,
    paddingLeft: 5,
  },
  resourceDetail: {
    flex: 1,
    fontSize: 20,
    marginLeft: 15,
  },
});

export { resourceStyles };
