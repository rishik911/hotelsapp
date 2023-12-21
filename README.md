# The Hotel Listing App!!

The following tasks can be done in the application:

1. Search for your location using autocomplete API
2. Select your location from a list
3. Select your date from the calendar
4. Once set! You can see your hotel list
5. The hotel list is paginated
6. You can add / remove your favorite hotel
7. Every addition/removal is persisted.

## Quick demo of the app!

![hotels-app](https://github.com/rishik911/hotelsapp/assets/49229949/00a60fec-e8ee-47dd-b55f-5f2280874eba)


## The app supports Deep Links for Android!!

All you need to do is...

1. use the prefix -- hotelsApp://
2. The deep links are supported for 2 screens
   1. Landing page -- hotelsApp://landing
   2. hotel listing page -- hotelsApp://hotel-listing/:location/:date
      - location --> can be any valid string
      - date --> in the format of (YYYY-MM-DD) or any valid date format
      Example : npx uri-scheme open hotelsApp://hotel-listing/bangalore/2023-12-21  --android

The core packages used for the application:

1. react-navigation (stack-navigator with needed dependencies)
2. react-native-vector-icons
3. axios
4. react-native-modal
5. react-native-async-storage/async-storage
6. react-native-paper-dates (with needed translation polyfill packages)

## Steps to start up the app

1. Install the node modules --> `npm install || yarn install`
2. Run `npx react-native run-android` to start the application on your device | simulator.

### IOS device is not yet supported!!
