import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AppContextProps} from './types';
import _debounce from 'lodash.debounce';
import {BASE_URL, ENDPOINTS, makeGetCall} from '../Networks/Utils';
import {readFromStorage, writeToStorage} from '../Utils/helper';

const AppContext = React.createContext({});

const AppProvider: React.FC<AppContextProps> = ({children}) => {
  const [location, setLocation] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationList, setLocationList] = useState([]);
  const [date, setDate] = useState(undefined);
  const [showDatePicker, setDatePicker] = useState(false);
  const [hotelList, setHotelList] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const limit = useRef(4);

  useEffect(() => {
    readFromStorage().then(respData =>
      setWishlist(respData?.length > 0 ? respData : []),
    );
  }, []);

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
    makeGetCall(
      `${BASE_URL}/${ENDPOINTS.GET_HOTEL_LIST}limit=${
        limit?.current
      }&query=${encodeURI(area)}`,
    )
      .then(respData => {
        setHotelList(respData?.hotels || []);
      })
      .catch(e => {});
  };

  const handleAdditionToWishList = (id: string) => {
    const currentWishList = [...wishlist];
    currentWishList.push(id);
    writeToStorage(currentWishList).then(respData => {
      setWishlist(currentWishList);
    });
  };

  const handleRemoveFromWishList = (id: string) => {
    const currentWishList = wishlist.filter(item => item !== id);
    writeToStorage(currentWishList).then(respData => {
      setWishlist(currentWishList);
    });
  };

  const handleWishList = (action: string, id: string) => {
    if (action === 'add') {
      handleAdditionToWishList(id);
    } else {
      handleRemoveFromWishList(id);
    }
  };

  const makePaginatedCall = () => {
    limit.current = limit.current + 10;
    getHotelList(location);
  };

  const resetListValues = () => {
    setHotelList([]);
    limit.current = 10;
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
        wishlist,
        handleWishList,
        makePaginatedCall,
        resetListValues,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
