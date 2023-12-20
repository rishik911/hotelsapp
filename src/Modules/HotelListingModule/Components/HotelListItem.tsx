import React from 'react';
import {View, Text} from 'react-native';
import {HotelListItemProps} from '../types';

const HotelListItem: React.FC<HotelListItemProps> = ({
  hotelName = '',
  ratings = null,
  reviews = null,
  address = '',
  id=''
}) => {
  return (
    <View>
      <Text>{hotelName}</Text>
      <Text>{address}</Text>
      {ratings && <Text>{ratings}</Text>}
      {reviews && <Text>{reviews}</Text>}
    </View>
  );
};

export default React.memo(HotelListItem);
