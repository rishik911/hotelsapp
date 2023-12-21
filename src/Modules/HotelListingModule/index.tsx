import React, {useCallback, useContext, useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {HotelListingProps} from './types';
import HeaderComponent from '../../CommonComponents/Header/HeaderComponent';
import {AppContext} from '../../Context/AppContext';
import {FlatList} from 'react-native-gesture-handler';
import HotelListItem from './Components/HotelListItem';
import {NAVIGATION_SCREENS} from '../../Utils/strings';

const HotelListing: React.FC<HotelListingProps> = props => {
  const {
    location,
    date,
    getHotelList,
    hotelList,
    makePaginatedCall,
    isError,
    resetListValues,
    selectLocationUpdate,
    updateDate,
    isEndReached,
  } = useContext(AppContext);

  const {params = {}} = props?.route || {};

  useEffect(() => {
    getHotelList(location);
    return () => {
      resetListValues();
    };
  }, []);

  useEffect(() => {
    const {date, location} = params;

    if (date) {
      const dateObj = {
        date: new Date(date),
      };
      updateDate(dateObj);
    }
    if (location) {
      selectLocationUpdate(location, false);
      getHotelList(location);
    }
  }, [params]);

  const handleGoBack = useCallback(() => {
    props.navigation?.canGoBack()
      ? props.navigation.goBack()
      : props.navigation.navigate(NAVIGATION_SCREENS.LANDING_PAGE);
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
    if (isEndReached) return <></>;

    return (
      <View>
        {isError ? (
          <Text>Something went wrong, try again in some time...</Text>
        ) : (
          <ActivityIndicator size="large" />
        )}
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
