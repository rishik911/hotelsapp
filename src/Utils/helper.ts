import AsyncStorage from '@react-native-async-storage/async-storage';

export const writeToStorage = async (data: [], key = STORAGE_KEYS.WISHLIST) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    return e?.message;
  }
};

export const readFromStorage = async (key = STORAGE_KEYS.WISHLIST) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else return [];
  } catch (e) {
    return e?.message;
  }
};

const STORAGE_KEYS = {
  WISHLIST: 'wishlist',
};
