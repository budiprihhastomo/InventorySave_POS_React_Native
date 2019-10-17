import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardGroup: {
    margin: 15,
  },
  cardGroupItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  cardItem: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  cardHeader: {
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#485460',
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
    marginTop: 5,
    marginLeft: 15,
  },
  cardPrice: {
    color: '#fff',
  },
  cardPriceItem: {
    backgroundColor: '#1abc9c',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopStartRadius: 50,
    borderBottomStartRadius: 50,
    right: -15,
    top: -130,
    position: 'absolute',
  },
});
