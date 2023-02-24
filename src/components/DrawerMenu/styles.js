import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  price: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    marginRight: 5,
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  bottomPart: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  share: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
});

export default styles;
