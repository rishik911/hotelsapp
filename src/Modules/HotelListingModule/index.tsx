import React, {useCallback, useContext, useEffect} from 'react';
import {ActivityIndicator, Linking, Text, View} from 'react-native';
import {HotelListingProps} from './types';
import HeaderComponent from '../../CommonComponents/Header/HeaderComponent';
import {AppContext} from '../../Context/AppContext';
import {FlatList} from 'react-native-gesture-handler';
import HotelListItem from './Components/HotelListItem';

const HotelListing: React.FC<HotelListingProps> = (
  props,
  {deeplinkDate = null, deeplinkLocation = null},
) => {
  const {
    location,
    date,
    getHotelList,
    hotelList,
    makePaginatedCall,
    resetListValues,
  } = useContext(AppContext);

  useEffect(() => {
    getHotelList(location);
    return () => {
      resetListValues();
    };
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

  const getItemLayout = (_, index) => ({
    length: 120,
    offset: 120 * index,
    index,
  });

  const renderListFooter = () => {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
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
      <FlatList
        getItemLayout={getItemLayout}
        data={hotelList}
        renderItem={renderHotelList}
        onEndReached={makePaginatedCall}
        initialNumToRender={10}
        maxToRenderPerBatch={50}
        contentContainerStyle={{paddingBottom: 80}}
        ListFooterComponent={renderListFooter}
        ListEmptyComponent={renderListFooter}
      />
    </View>
  );
};

export default HotelListing;
