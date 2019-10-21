import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchBarItem: {
    width: '100%',
    paddingHorizontal: 5,
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
    elevation: 5,
  },
  header: {
    backgroundColor: '#fff',
    elevation: 5,
    paddingTop: 5,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    marginBottom: 20,
  },
  body: {
    alignItems: 'center',
    position: 'absolute',
  },
  titleText: {
    color: '#000',
    fontSize: 18,
  },
  searchBar: {
    color: '#485460',
    fontFamily: 'Roboto',
  },
  container: {
    paddingHorizontal: 25,
    height: 95,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  emptyFilter: {
    flex: 1,
    marginTop: '30%',
  },
  textGroup: {
    alignItems: 'center',
  },
  textNotFound: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textSub: {
    color: '#000',
    fontSize: 12,
  },
});
