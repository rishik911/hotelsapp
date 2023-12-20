import React, {useCallback, useContext, useEffect} from 'react';
import {Linking, Text, View} from 'react-native';
import {HotelListingProps} from './types';
import HeaderComponent from '../../CommonComponents/Header/HeaderComponent';
import {AppContext} from '../../Context/AppContext';
import {FlatList} from 'react-native-gesture-handler';
import HotelListItem from './Components/HotelListItem';

const HotelListing: React.FC<HotelListingProps> = (
  props,
  {deeplinkDate = null, deeplinkLocation = null},
) => {
  const {location, date, getHotelList, hotelList} = useContext(AppContext);

  useEffect(() => {
    getHotelList(location);
  }, []);

  const handleGoBack = useCallback(() => {
    props.navigation.goBack();
  }, []);

  const renderHotelList = ({item}) => {
    const {
      id = '',
      name = '',
      address = '',
      site_review_rating = null,
      site_review_count = null,
    } = item || {};
    return (
      <HotelListItem
        id={id}
        hotelName={name}
        address={address}
        reviews={site_review_count}
        ratings={site_review_rating}
      />
    );
  };

  return (
    <View>
      <HeaderComponent
        type="hotel-list"
        handleBackPress={handleGoBack}
        showBackButton
        headerTitle={location}
        subTitle={new Date(date)?.toDateString()}
      />
      <FlatList data={hotelList} renderItem={renderHotelList} />
    </View>
  );
};

export default HotelListing;
