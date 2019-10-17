import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardGroup: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 150,
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
  },
  cardGroupItem: {
    marginBottom: 5,
  },
  cardItem: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardHeader: {
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    maxWidth: 200,
  },
  cardCategory: {
    fontSize: 10,
    width: 50,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
    color: '#fff',
    backgroundColor: '#0fbcf9',
  },
  cardPrice: {
    color: '#fff',
  },
});
