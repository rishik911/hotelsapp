import {Dimensions, StyleSheet} from 'react-native';
import {THEME_COLOR} from '../Utils/strings';

const {width} = Dimensions.get('window');
const HeaderStyles = StyleSheet.create({
  container: {
    height: 60,
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: THEME_COLOR,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
  },
  backHolder: {
    marginRight: 4,
  },
  textHolder: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  subHeader: {
    color: '#fff',
    paddingLeft: 4,
    fontSize: 12,
  },
});

const ButtonStyles = StyleSheet.create({
  container: {
    width: width / 1.3,
    height: 50,
    backgroundColor: THEME_COLOR,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export {HeaderStyles, ButtonStyles};
