import axios from 'axios';

export const makeGetCall = async (endpoint: string) => {
  try {
    const response = await axios.get(endpoint);
    return response?.data || [];
  } catch (e) {
    //handleError
    console.log('error', JSON.stringify(e));
  }
};

export const BASE_URL = 'http://localhost:3000';

export const ENDPOINTS = {
  AUTOCOMPLETE_LOCATION: 'auto-complete?limit=10&query=',
  GET_HOTEL_LIST: 'hotels?',
};
