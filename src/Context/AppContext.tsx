import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AppContextProps} from './types';
import _debounce from 'lodash.debounce';
import useAutoCompleteLocation from '../Networks/Hooks/useAutoComplete';
import {BASE_URL, ENDPOINTS, makeGetCall} from '../Networks/Utils';

const AppContext = React.createContext({});

const AppProvider: React.FC<AppContextProps> = ({children}) => {
  const [location, setLocation] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationList, setLocationList] = useState([]);
  const [date, setDate] = useState(undefined);
  const [showDatePicker, setDatePicker] = useState(false);
  const [hotelList, setHotelList] = useState([]);

  const updateLocationModal = () => {
    setShowLocationModal(prev => !prev);
  };

  const handleLocationAutoComplete = (value: string) => {
    makeGetCall(
      `${BASE_URL}/${ENDPOINTS.AUTOCOMPLETE_LOCATION}${encodeURI(value)}`,
    )
      .then(respData => {
        setLocationList(respData?.cities || []);
      })
      .catch(e => {});
  };

  const debounceFn = useCallback(
    _debounce(handleLocationAutoComplete, 300),
    [],
  );

  const updateLocation = (value: string) => {
    setLocation(value);
    debounceFn(value);
  };

  const selectLocationUpdate = (area: string) => {
    setLocation(area);
    updateLocationModal();
  };

  const updateDate = (data: any) => {
    setDate(data?.date);
    handleDatePicker();
  };

  const handleDatePicker = () => {
    setDatePicker(prev => !prev);
  };

  const getHotelList = (area: string) => {
    makeGetCall(`${BASE_URL}/${ENDPOINTS.GET_HOTEL_LIST}${encodeURI(area)}`)
      .then(respData => {
        setHotelList(respData?.hotels || []);
      })
      .catch(e => {});
  };

  return (
    <AppContext.Provider
      value={{
        location,
        showLocationModal,
        updateLocation,
        updateLocationModal,
        locationList,
        selectLocationUpdate,
        date,
        updateDate,
        handleDatePicker,
        showDatePicker,
        getHotelList,
        hotelList,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
