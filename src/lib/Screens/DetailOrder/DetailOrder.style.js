import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  iconButton: {
    fontSize: 20,
  },
  btnBack: {
    backgroundColor: '#fff',
    elevation: 5,
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
  },
  imageHeader: {
    width: '100%',
    height: 400,
    position: 'absolute',
    overflow: 'hidden',
  },
  imageCard: {
    width: 100,
    borderRadius: 10,
    overflow: 'hidden',
    height: '100%',
  },
  cardHeader: {
    width: WIDTH * 0.93,
    height: 'auto',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 5,
    padding: 30,
    flexDirection: 'column',
  },
  cardRecent: {
    width: WIDTH * 0.93,
    height: 'auto',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 5,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  itemTop: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemDesc: {
    width: WIDTH * 0.6,
  },
  itemBottom: {
    marginBottom: 10,
    width: 270,
  },
  itemRight: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  itemRightBottom: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  contentWrapper: {
    flexDirection: 'column',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPrice: {
    color: '#0fbcf9',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  textCategory: {
    fontSize: 10,
    width: 60,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
    color: '#fff',
    backgroundColor: '#0fbcf9',
    marginTop: 5,
    marginLeft: 10,
  },
  textDesc: {
    width: WIDTH * 0.8,
  },
  qtyGroup: {
    flexDirection: 'row',
  },
  titleSection: {
    marginTop: 25,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#34495e',
  },
  btnQty: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#0fbcf9',
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  inputQty: {
    width: 50,
    height: 40,
  },
});
