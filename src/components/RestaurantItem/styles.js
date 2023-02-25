import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  rating: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default styles;
