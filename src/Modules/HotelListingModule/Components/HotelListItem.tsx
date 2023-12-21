import React, {useContext, useMemo} from 'react';
import {View, Text, Pressable} from 'react-native';
import {HotelListItemProps} from '../types';
import {HotelModuleStyles} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../../../Context/AppContext';

const HotelListItem: React.FC<HotelListItemProps> = ({
  hotelName = '',
  ratings = null,
  reviews = null,
  address = '',
  id = '',
}) => {
  const {wishlist, handleWishList} = useContext(AppContext);

  const isItemPresentInWishList = useMemo(() => {
    const isItemPresent = wishlist.find((item: string | Number) => item === id);
    return isItemPresent !== null && isItemPresent !== undefined;
  }, [wishlist]);

  const handleIconClick = () => {
    if (isItemPresentInWishList) {
      handleWishList('remove', id);
    } else {
      handleWishList('add', id);
    }
  };

  return (
    <View style={HotelModuleStyles.listContainer}>
      <View style={HotelModuleStyles.textHolder}>
        <Text style={HotelModuleStyles.titleText}>{hotelName}</Text>
        <Text
          style={HotelModuleStyles.addressText}
          numberOfLines={1}
          ellipsizeMode="tail">
          {address}
        </Text>
        <Text style={HotelModuleStyles.ratingsText}>
          {ratings ? `${ratings} stars -` : `0 starts -`}{' '}
          {reviews ? `${reviews} reviews` : `0 reviews`}
        </Text>
      </View>
      <View style={HotelModuleStyles.iconHolder}>
        <Pressable
          onPress={handleIconClick}
          android_ripple={{color: 'white', borderless: false}}>
          <Icon
            name={isItemPresentInWishList ? 'heart' : 'heart-o'}
            color="red"
            size={24}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default React.memo(HotelListItem);
