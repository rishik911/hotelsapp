import {StyleSheet} from 'react-native';

export const HotelModuleStyles = StyleSheet.create({
  listContainer: {
    height: 120,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    margin: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  textHolder: {
    paddingTop: 16,
    width: '80%',
  },
  iconHolder: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
  },
  ratingsText: {
    fontSize: 18,
    fontWeight: '800',
  },
});
