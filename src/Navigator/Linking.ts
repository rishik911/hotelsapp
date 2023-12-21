export const linking = {
  prefixes: ['hotelsApp://'],

  config: {
    screens: {
      landing_page: {
        path: 'landing',
      },
      hotel_listing_page: {
        path: 'hotel-listing/:location/:date',
      },
    },
  },
};
