import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
  },
  cardGroupItem: {
    paddingHorizontal: 15,
    width: '100%',
  },
  cardItem: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 25,
    marginBottom: 20,
    padding: 10,
  },
  imageHeader: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#485460',
    maxWidth: 200,
    marginVertical: 10,
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
  cardDesc: {
    fontSize: 12,
    width: 180,
  },
  btnCart: {
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0fbcf9',
    marginTop: 5,
    right: 110,
    position: 'absolute',
  },
  cardPrice: {
    fontSize: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
    color: '#fff',
    backgroundColor: '#27ae60',
  },
});
