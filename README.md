#The Hotel Listig App!!

The following tasks can be done in the application :

1. Search for your location using autocomplete API
2. Select your location from a list
3. Select your date from the calendar
4. Once set! You can see your hote list
5. The hotel list is paginated
6. You can add / remove you favoutite hotel
7. Every addition/removal is persisted .

#Quick demo of the app!

file:///home/rishik/Downloads/hotels-app.GIF


#The app supports DeepLinks for Android!!

All you need to do is ...

1. use the prefix  --    hotelsApp://
2. The deeplinks are supported for 2 screens
   1. Landing page --  hotelsApp://landing
   2. hotel listing page -- hotel-listing/:location/:date  
      location --> can be any valid string
      date --> in the format of (YYYY-MM-DD ) or any valid date format


The core packages used for the application --

1. react-navaigation (stack-navigator with needed dependencies)
2. react-native-vector-icons
3. axios
4. react-native-modal
5. react-native-async-storage/async-storage
6. react-native-paper-dates (with needed translation polyfill packages)


#Steps to start up the app 

1. Install the node modules --> npm install || yarn install
2. Run npx react-native run-android to start the application on your device | simulator.

###IOS device is not yet supported!!
