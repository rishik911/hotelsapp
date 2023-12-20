import {NAVIGATION_SCREENS} from '../Utils/strings';

export const linking = {
  prefixes: ['hoteslApp://'],
  config: {
    screens: {
      landing_page: 'landing',
      hotel_listing_page: 'hotel-listing/:deeplinkLocation/:deeplinkDate',
    },
  },
};
