export interface HotelListingProps {
  deeplinkDate?: string;
  deeplinkLocation?: string;
}

export interface HotelListItemProps {
  hotelName: string;
  ratings: string;
  reviews: string;
  address: string;
  id: string | Number;
}
