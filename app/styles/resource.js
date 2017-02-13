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
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  },
  name: {
    fontSize: 18,
    paddingLeft: 5,
  },
  info: {
    fontSize: 16,
    alignSelf: 'center',
  },
  resourceDetail: {
    flex: 1,
    fontSize: 20,
    marginLeft: 15,
  },
});

export { resourceStyles };
