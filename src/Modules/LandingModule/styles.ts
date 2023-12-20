import {Dimensions, StyleSheet} from 'react-native';
import {THEME_COLOR} from '../../Utils/strings';

const {height, width} = Dimensions.get('window');

export const LadingStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 16,
    width: width / 1.3,
    height: 50,
    justifyContent: 'center',
  },
  locationListItem: {
    height: 60,
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 8,
    width: width / 1.1,
    paddingHorizontal: 12,
  },
  modalContainer: {
    backgroundColor: '#fff',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'center',
    paddingTop: 24,
    paddingLeft: 12,
    width: width,
    backgroundColor: THEME_COLOR,
    paddingBottom: 24,
  },
  extraSpaceOnLeft: {
    marginLeft: 12,
  },
  inputModal: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 16,
    width: width / 1.15,
  },
});
