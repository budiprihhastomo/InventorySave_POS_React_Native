import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    backgroundColor: '#27ae60',
    borderBottomEndRadius: 50,
    elevation: 10,
    height: 360,
  },
  textWelcome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f5f5f5',
  },
  textIntro: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchBarItem: {
    width: '100%',
    paddingHorizontal: 5,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
    elevation: 5,
  },
  searchBar: {
    color: '#485460',
    fontFamily: 'Roboto',
  },
  section_half: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  section_full: {
    marginTop: 20,
  },
  titleSection: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#34495e',
  },
  sectionItemHorizontal: {
    marginVertical: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  sectionItemVertical: {
    marginTop: 20,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  wrapLayout: {
    flex: 1,
    flexDirection: 'column',
  },
});
