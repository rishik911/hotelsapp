import React from 'react';
import 'react-native-gesture-handler';
import HotelListingAppStack from './src/Navigator/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {linking} from './src/Navigator/Linking';
import {AppProvider} from './src/Context/AppContext';

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <AppProvider>
        <HotelListingAppStack />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
