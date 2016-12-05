import { StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56,
  },
  spinner: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
});

export { commonStyles };
